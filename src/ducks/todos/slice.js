import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      console.log('payload', payload);
      state.todos = payload;
    },
  },
});

const actions = { ...todosSlice.actions };
const reducer = todosSlice.reducer;

export { actions, reducer };
