import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk, RootState } from '../../store';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    inputValue: 'hello',
    list: <string[]>[],
  },
  reducers: {
    inputChange(state, { payload }) {
      state.inputValue = payload;
    },
    addItem(state) {
      state.list.push(state.inputValue);
      state.inputValue = '';
    },
    deleItem(state, { payload }) {
      state.list.splice(payload, 1);
    },
  },
});

export const { inputChange, addItem, deleItem } = todoListSlice.actions;

export default todoListSlice.reducer;

export const selectTodoList = (state: RootState) => state.todoList;
