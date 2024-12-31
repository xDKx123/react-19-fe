import { BaseModel } from '../../../models/baseModel.ts';

type MenuItemModel = BaseModel & {
  title: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  sequence: number;
  subMenuItems: SubMenuItemModel[];
};

type SubMenuItemModel = BaseModel & {
  menuId: string;
  url: string;
  name: string;
  sequence: number;
};

export type { MenuItemModel, SubMenuItemModel };
