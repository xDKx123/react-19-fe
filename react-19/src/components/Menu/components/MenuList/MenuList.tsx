import { FC, JSX, useEffect, useState } from 'react';
import { getExpandedItems, searchMenuAndSubmenuItems } from './functions.ts';
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { MenuItemModel, SubMenuItemModel } from '../../models/MenuModel.ts';
import * as Icons from '@mui/icons-material';

interface MenuListProps {
  menuItems: MenuItemModel[];
}

const MenuList: FC<MenuListProps> = (props: MenuListProps) => {
  const [search, setSearch] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const handleMenuItemClick = (id: string) => {
    //Expand the submenu
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle expansion for the clicked item
    }));
  };

  const filteredMenuItems = searchMenuAndSubmenuItems(props.menuItems, search);

  const highlightText = (
    text: string,
    search: string,
  ): JSX.Element | string => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <span key={index} className="bg-yellow-300">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  useEffect(() => {
    const items = getExpandedItems(search, props.menuItems);
    setExpandedItems(items);
  }, [search, props.menuItems]);

  return (
    <Box id={'menu'} className="min-w-1">
      <List>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search menu..."
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
                  primary={highlightText(item.name, search)}
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
              {hasSubmenu && (
                <Collapse in={isExpanded} timeout={'auto'} unmountOnExit={true}>
                  <List component="div" disablePadding>
                    {item.subMenuItems.map(
                      (subItem: SubMenuItemModel, subIndex: number) => {
                        return (
                          <ListItem
                            key={subIndex}
                            id={`submenu-item-${subItem.id}`}
                            className="hover:bg-gray-600 rounded-md transition pl-10"
                            component="a"
                            href={subItem.url}
                          >
                            <ListItemText
                              primary={highlightText(subItem.name, search)}
                              slotProps={{
                                primary: { className: 'text-gray-300' },
                              }}
                            />
                          </ListItem>
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
