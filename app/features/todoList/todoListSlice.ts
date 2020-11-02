import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
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
    fetch(state, { payload }) {
      const newState = { ...state };

      newState.list = payload.data.list;

      return {
        ...state,
        list: [...newState.list],
      };
    },
  },
});

export const { inputChange, addItem, deleItem, fetch } = todoListSlice.actions;

export default todoListSlice.reducer;

export const fetchList = (): AppThunk => async (dispatch) => {
  const res = await Axios.get(
    'https://www.fastmock.site/mock/e6514194ff79c9dbcf5d721d3dc7b5d1/todo-list/get-list'
  );

  dispatch(fetch(res.data));
};

export const selectTodoList = (state: RootState) => state.todoList;
