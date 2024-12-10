import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const userProfile = createAsyncThunk(
  'user/Profile',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Échec de la récupération du profil');
      }
      console.log('Response status:', response.status); 
      const data = await response.json();
      console.log('Data received:', data);
      return { firstname: data.body.firstName, lastname: data.body.lastName };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstname: '',
    lastname: '',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.fulfilled, (state, action) => {
        state.firstname = action.payload.firstname;
        state.lastname = action.payload.lastname;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;