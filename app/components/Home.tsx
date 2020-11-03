import React from 'react';
import styles from './Home.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h1 style={{ marginTop: 50, textAlign: 'center' }}>
        Welcome to electron
      </h1>
    </div>
  );
}
