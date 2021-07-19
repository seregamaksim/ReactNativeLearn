import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.todos;

export const selectTodosByUserId = userId =>
  createSelector(selectTodos, state =>
    state.filter(item => item.userId === userId),
  );
