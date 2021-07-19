import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

const actions = { ...userSlice.actions };
const reducer = userSlice.reducer;

export { actions, reducer };
