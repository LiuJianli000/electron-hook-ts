import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import {
  UserOutlined,
  MenuOutlined,
  OrderedListOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './MenuBar.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.menu}>
      <div className={styles.avatar}>
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
      </div>
      <div className={styles.menuMain}>
        <Link to={routes.COUNTER}>
          <PlusSquareOutlined style={{ marginTop: 20 }} />
        </Link>
        <Link to={routes.TODOLIST}>
          <OrderedListOutlined style={{ marginTop: 20 }} />
        </Link>
      </div>
      <div className={styles.menuFooter}>
        <Dropdown
          overlay={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Menu style={{ width: 190 }}>
              <Menu.Item>
                <Link to={routes.LOGIN}>退出登录</Link>
              </Menu.Item>
              <Menu.Item>版本更新</Menu.Item>
            </Menu>
          }
          placement="bottomRight"
        >
          <MenuOutlined />
        </Dropdown>
      </div>
    </div>
  );
}
