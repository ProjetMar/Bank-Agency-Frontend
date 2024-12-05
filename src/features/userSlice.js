import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginAsync = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Échec de la connexion');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);  // Sauvegarder le token
      return { email, token: data.token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    email: null,
    token: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.isLoggedIn = false;
      state.email = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;