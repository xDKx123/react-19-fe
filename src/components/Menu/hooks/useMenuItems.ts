import { MenuItemModel } from '../models/MenuModel.ts';
import {useEffect, useMemo, useRef, useState} from 'react';
import MenuController from '../controllers/MenuController.ts';
import { menuMock } from '../components/MenuList/mocks.ts';

interface UseMenuItemsResult {
  menuItems: MenuItemModel[];
  error: string | null;
  loading: boolean;
}

interface MenuItemsResult {
    menuItems: MenuItemModel[];
    error: string | null;
    loading: boolean;
}

const useMenuItems = (): MenuItemsResult => {
  const [loadedMenuItems, setLoadedMenuItems] = useState<MenuItemModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // const sortMenuAndSubmenuItems = (
  //   menuItems: MenuItemModel[],
  // ): MenuItemModel[] => {
  //   return menuItems
  //     .sort((a, b) => a.sequence - b.sequence)
  //     .map((menuItem) => {
  //       if (menuItem.subMenuItems) {
  //         menuItem.subMenuItems = menuItem.subMenuItems.sort(
  //           (a, b) => a.sequence - b.sequence,
  //         );
  //       }
  //       return menuItem;
  //     });
  // };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        console.log("Fetching menu items...");
        setLoading(true);

        //const sortedMenuItems: MenuItemModel[] = sortMenuAndSubmenuItems(menuMock);
        setLoadedMenuItems(menuMock);
        return;

        //const menuItems: MenuItemModel[] = await MenuController.getMenuItems();
        //setMenuItems(menuItems);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchMenuItems();

  }, []);

  const menuItems = useMemo(() => loadedMenuItems, [loadedMenuItems, setLoadedMenuItems]);

  return { menuItems, error, loading };
};

export default useMenuItems;
export type { UseMenuItemsResult };
