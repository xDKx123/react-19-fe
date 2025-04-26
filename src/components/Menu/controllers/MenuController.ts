import ApiService from '../../../api/service.ts';
import { MenuItemModel } from '../models/MenuModel.ts';

class MenuController {
  private static menuPath = '/menu';

  private static apiService = new ApiService(this.menuPath);

  public static getMenuItems = async (): Promise<MenuItemModel[]> => {
    try {
      const menuItems: MenuItemModel[] = await this.apiService.get<
        MenuItemModel[]
      >(this.menuPath);
      return menuItems;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  };
}

export default MenuController;
