import React, { FC } from 'react';
import styles from './SubMenu.module.scss';

interface SubMenuProps {}

const SubMenu: FC<SubMenuProps> = () => (
  <div className={styles.SubMenu}>
    SubMenu Component
  </div>
);

export default SubMenu;
