import { MenuItemModel } from '../../models/MenuModel.ts';

const searchMenuAndSubmenuItems = (
  menuItems: MenuItemModel[],
  search: string,
): MenuItemModel[] => {
  if (!search) return menuItems;

  return menuItems
    .map((item) => {
      const matchedSubMenuItems = item.subMenuItems?.filter((subItem) =>
        subItem.name.toLowerCase().includes(search.toLowerCase()),
      );

      const isMatch = item.name.toLowerCase().includes(search.toLowerCase());

      if (isMatch || (matchedSubMenuItems && matchedSubMenuItems.length > 0)) {
        return {
          ...item,
          subMenuItems: matchedSubMenuItems || [],
        };
      }

      return null;
    })
    .filter(Boolean) as MenuItemModel[];
};

const getExpandedItems = (search: string, menuItems: MenuItemModel[]) => {
  if (!search) {
    return {};
  }
  const expanded = menuItems.reduce(
    (acc, item) => {
      const hasMatchingSubmenu =
        item.subMenuItems?.some((subItem) =>
          subItem.name.toLowerCase().includes(search.toLowerCase()),
        ) ?? false;

      if (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        hasMatchingSubmenu
      ) {
        acc[item.id] = true; // Expand items with matches
      }

      return acc;
    },
    {} as { [key: string]: boolean },
  );

  return expanded;
};

export { searchMenuAndSubmenuItems, getExpandedItems };
