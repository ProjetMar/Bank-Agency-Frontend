import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({firstName, lastName}) => {
    console.log(firstName)
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });

    if (!response.ok) {
      throw new Error('Échec de la récupération du profil');
    }
    console.log('Response status:', response.status)
    const data = await response.json();
    console.log('Data received:', data);
    return { firstname: data.body.firstName, lastname: data.body.lastName };
    
  }
);

const updateProfileSlice = createSlice({
  name: 'updateProfile',
  initialState: {
    firstname: null,
    lastname: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.firstname = action.payload.firstname; 
        state.lastname = action.payload.lastname;   
        state.error = null;       
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default updateProfileSlice.reducer;