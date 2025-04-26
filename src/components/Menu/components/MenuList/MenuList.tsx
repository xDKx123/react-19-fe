import {FC, JSX, useCallback, useDeferredValue, useEffect, useMemo, useState} from 'react';
import { getExpandedItems, searchMenuAndSubmenuItems } from './functions.ts';
import {
  Box,
  Collapse, Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { MenuItemModel, SubMenuItemModel } from '../../models/MenuModel.ts';
import * as Icons from '@mui/icons-material';
import {useNavigate} from "react-router";
import MenuHighlightText from "../MenuHighlightText/MenuHighlightText.tsx";

interface MenuListProps {
  menuItems: MenuItemModel[];
}

const MenuList: FC<MenuListProps> = (props: MenuListProps) => {
  const [search, setSearch] = useState<string>('');
  const searchDeferredValue = useDeferredValue(search)

  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const navigate = useNavigate();

  const handleMenuItemClick = useCallback((id: string) => {
    //Expand the submenu
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle expansion for the clicked item
    }));
  }, []);

  const filteredMenuItems = useMemo(() => searchMenuAndSubmenuItems(props.menuItems, searchDeferredValue), [props.menuItems, searchDeferredValue]);

  const items = useMemo(() => {
    return getExpandedItems(search, props.menuItems);
  }, [search, props.menuItems]);

  useEffect(() => {
    setExpandedItems(items);
  }, [items]);

  const handleNavigation = (url: string) => {
    const urlWithParams = url + '?items=25&page=0'
    navigate(urlWithParams);
  }

  return (
    <Box id={'menu'} className={"min-w-1"}>
      <List>
        <TextField
          fullWidth
          variant={"outlined"}
          placeholder={"Search menu..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />
        {filteredMenuItems.length === 0 && <span>No menu items found</span>}
        {filteredMenuItems.map((item: MenuItemModel) => {
          const IconComponent = Icons[item.icon as keyof typeof Icons];
          const hasSubmenu = item.subMenuItems && item.subMenuItems.length > 0;
          const isExpanded = expandedItems[item.id];

          return (
            <Box key={item.id}>
              <ListItem
                id={'menu-item-' + item.id}
                className="hover:bg-gray-700 rounded-md transition"
                component="a"
                onClick={() => handleMenuItemClick(item.id)}
              >
                <ListItemIcon>
                  {IconComponent && <IconComponent className="text-white" />}
                </ListItemIcon>
                <ListItemText
                  primary={<MenuHighlightText text={item.name} search={search} />}
                  slotProps={{
                    primary: { className: 'text-white' },
                  }}
                />
                {hasSubmenu && (
                  <>
                    {isExpanded ? (
                      <Icons.ExpandLess className="text-white" />
                    ) : (
                      <Icons.ExpandMore className="text-white" />
                    )}
                  </>
                )}
              </ListItem>
              <Divider />
              {hasSubmenu && (
                <Collapse in={isExpanded} timeout={'auto'} unmountOnExit={true}>
                  <List component={"div"} disablePadding={true}>
                    {item.subMenuItems.map(
                      (subItem: SubMenuItemModel, subIndex: number, array: SubMenuItemModel[]) => {
                        return (
                          <>
                            <ListItem
                                key={subIndex}
                                id={`submenu-item-${subItem.id}`}
                                className={"hover:bg-gray-600 rounded-md transition pl-10"}
                                component={"button"}
                                //href={subItem.url}
                                onClick={() => handleNavigation(subItem.url)}
                            >
                              <ListItemText
                                  primary={<MenuHighlightText text={subItem.name} search={search} />}
                                  slotProps={{
                                    primary: { className: 'text-gray-300' },
                                  }}
                              />
                            </ListItem>
                            <Divider variant={subIndex < array.length - 1 ? "middle" : "fullWidth"}/>
                          </>
                        );
                      },
                    )}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default MenuList;

export type { MenuListProps };
