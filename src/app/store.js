import userReducer from '../features/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice';
import updateProfileReducer from '../features/updateProfile';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    updateProfile: updateProfileReducer,
  },
});
export default store;