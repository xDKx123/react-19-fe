import { lazy, Suspense } from 'react';

const LazyMenu = lazy(() => import('./Menu'));

const Menu = () => (
  <Suspense fallback={null}>
    <LazyMenu />
  </Suspense>
);

export default Menu;
