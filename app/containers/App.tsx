import React, { ReactNode, useEffect, useState } from 'react';
import CloseOp from '../components/CloseOp';
import MenuBar from '../components/MenuBar';

type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  const { children } = props;

  const [isLoginPage, setLoginLayout] = useState(true);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#/') {
        setLoginLayout(true);
      } else {
        setLoginLayout(false);
      }
    });
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {!isLoginPage && <MenuBar />}
      <div style={{ width: '100%' }}>
        <CloseOp />
        <div className="appContainer">{children}</div>
      </div>
    </div>
  );
}
