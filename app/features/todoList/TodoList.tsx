import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Input, List } from 'antd';
import styles from './TodoList.scss';
import {
  addItem,
  deleItem,
  inputChange,
  selectTodoList,
} from './todoListSlice';

export default function Counter() {
  const dispatch = useDispatch();
  const state = useSelector(selectTodoList);

  return (
    <div className={styles.content}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Input
        style={{ width: 300, marginRight: 15 }}
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
      <div style={{ width: 300, marginTop: 15 }}>
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
