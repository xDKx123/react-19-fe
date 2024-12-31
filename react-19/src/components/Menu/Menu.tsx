import { FC } from 'react';
import useMenuItems from './hooks/useMenuItems.ts';
import MenuList from './components/MenuList/MenuList.lazy.tsx';

const Menu: FC = () => {
  const { menuItems, error } = useMenuItems();

  if (error) {
    return (
      <div className={''}>
        <p>{error}</p>
      </div>
    );
  }

  return <MenuList menuItems={menuItems} />;
};

export default Menu;
