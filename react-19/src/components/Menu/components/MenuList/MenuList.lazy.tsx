import { lazy, Suspense } from 'react';
import { MenuListProps } from './MenuList.tsx';

const LazyMenuList = lazy(() => import('./MenuList.tsx'));

const MenuList = (props: MenuListProps) => (
  <Suspense fallback={null}>
    <LazyMenuList {...props} />
  </Suspense>
);

export default MenuList;
