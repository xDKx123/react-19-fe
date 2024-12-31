import React, { lazy, Suspense } from 'react';

const LazySubMenu = lazy(() => import('./SubMenu'));

const SubMenu = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySubMenu {...props} />
  </Suspense>
);

export default SubMenu;
