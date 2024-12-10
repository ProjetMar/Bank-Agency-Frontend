import userReducer from '../features/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});
export default store;