import { Button } from 'antd';
import React, { useEffect } from 'react';
import styles from './Login.scss';

const { remote } = require('electron');

export default function Counter() {
  const initPageSize = async () => {
    await remote.getCurrentWindow().setSize(360, 500);
  };

  const changePageSize = async () => {
    await remote.getCurrentWindow().setSize(1024, 728);
  };

  useEffect(() => {
    initPageSize();
  }, []);

  return (
    <div className={styles.login}>
      <Button
        onClick={() => {
          window.location.hash = '#/counter';
          changePageSize();
        }}
      >
        To Count
      </Button>
    </div>
  );
}
