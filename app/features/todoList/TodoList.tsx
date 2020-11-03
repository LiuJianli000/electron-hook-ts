import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, List } from 'antd';
import styles from './TodoList.scss';
import {
  addItem,
  deleItem,
  fetchList,
  inputChange,
  selectTodoList,
} from './todoListSlice';

export default function Counter() {
  const dispatch = useDispatch();
  const state = useSelector(selectTodoList);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <Input
        style={{ width: 360, marginRight: 15 }}
        value={state.inputValue}
        allowClear
        onChange={(e) => {
          dispatch(inputChange(e.target.value));
        }}
      />
      <Button
        type="primary"
        onClick={() => {
          dispatch(addItem());
        }}
      >
        ADD
      </Button>
      <div style={{ width: 360, marginTop: 15 }}>
        <List
          bordered
          dataSource={state.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                dispatch(deleItem(index));
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
