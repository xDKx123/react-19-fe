import { FC } from 'react';
import {useMenuContext} from "../../providers/MenuProvider.tsx";
import MenuList from "./components/MenuList/MenuList.tsx";

const Menu: FC = () => {
  const { menuItems, error } = useMenuContext();

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
