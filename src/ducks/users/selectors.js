import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.users;

export const selectUserById = id =>
  createSelector(selectUsers, state => state.filter(item => item.id === id)[0]);

export default {
  selectUsers,
  selectUserById,
};
