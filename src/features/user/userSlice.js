
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserProfile, updateUserProfile } from './userAPI';

const initialState = {
  profile: null,
  status: 'idle',
};

export const getUserProfile = createAsyncThunk('user/fetchUserProfile', async () => {
  const response = await fetchUserProfile();
  return response;
});

export const saveUserProfile = createAsyncThunk('user/updateUserProfile', async (profile) => {
  const response = await updateUserProfile(profile);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(saveUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export default userSlice.reducer;
