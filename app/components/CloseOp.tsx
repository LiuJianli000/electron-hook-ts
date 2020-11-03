/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import {
  MinusOutlined,
  BorderOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { ipcRenderer } from 'electron';
import styles from './CloseOp.scss';

export default function CloseOp(): JSX.Element {
  const [isMax, setMax] = useState(false);

  useEffect(() => {
    ipcRenderer.on('max-screen', (_, arg) => {
      if (arg) {
        setMax(true);
      } else {
        setMax(false);
      }
    });
  }, []);

  return (
    <div className={styles.dragArea}>
      <div
        className={styles.btn}
        onClick={() => {
          ipcRenderer.send('window-min');
        }}
      >
        <MinusOutlined />
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          ipcRenderer.send('window-max');
        }}
      >
        {isMax ? (
          <i className="fa fa-window-restore" aria-hidden="true" />
        ) : (
          <BorderOutlined />
        )}
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          ipcRenderer.send('window-close');
        }}
      >
        <CloseOutlined />
      </div>
    </div>
  );
}
