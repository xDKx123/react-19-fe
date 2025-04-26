import {MenuItemModel} from "../../models/MenuModel.ts";

export const menuMock: MenuItemModel[] = [
    {
        id: '1',
        title: 'System Admin',
        name: 'Home',
        description: 'Home page',
        icon: 'Home',
        url: '/home',
        sequence: 1,
        subMenuItems: [
            {
                id: '1',
                menuId: '1',
                name: 'Home 1',
                url: '/home/1',
                sequence: 1,
            },
            {
                id: '2',
                menuId: '1',
                name: 'Home 2',
                url: '/home/2',
                sequence: 2,
            },
        ],
    },
    {
        id: '2',
        title: 'About',
        name: 'About',
        description: 'About page',
        icon: 'Info',
        url: '/about',
        sequence: 3,
        subMenuItems: [],
    },
    {
        id: '3',
        title: 'HRM',
        name: 'HRM',
        description: 'HRM page',
        icon: 'HRM',
        url: '/hrm',
        sequence: 2,
        subMenuItems: [
            {
                id: '1',
                menuId: '3',
                name: 'Home 1',
                url: '/hrm/1',
                sequence: 1,
            },
            {
                id: '2',
                menuId: '3',
                name: 'Home 2',
                url: '/hrm/2',
                sequence: 2,
            },
        ],
    },
    {
        id: '4',
        title: 'System Admin',
        name: 'System Admin',
        description: 'System Admin',
        icon: 'SystemAdmin',
        url: '/sys-admin',
        sequence: 4,
        subMenuItems: [
            {
                id: '1',
                menuId: '4',
                name: 'Versions',
                url: '/sys-admin/versions',
                sequence: 1,
            },
            {
                id: '2',
                menuId: '4',
                name: 'Customers',
                url: '/sys-admin/customers',
                sequence: 2,
            },
            {
                id: '3',
                menuId: '4',
                name: 'Users',
                url: '/sys-admin/users',
                sequence: 3,
            }
        ],
    },
];