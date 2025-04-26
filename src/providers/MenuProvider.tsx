import useMenuItems, {UseMenuItemsResult} from "../components/Menu/hooks/useMenuItems.ts";
import {createContext, FC, useContext} from "react";

const MenuContext = createContext<UseMenuItemsResult>({
    menuItems: [],
    error: null,
    loading: false,
});

const MenuProvider: FC = ({children}: any) => {
    const menuData = useMenuItems();

    if (menuData.error) {
        console.error(menuData.error);
    }

    return (
        <MenuContext.Provider value={menuData}>
            {children}
        </MenuContext.Provider>
    )
}

const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }

    return context;
}

export {MenuProvider, useMenuContext};