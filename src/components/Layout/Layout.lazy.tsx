import React, { JSX, lazy, Suspense } from 'react';

const LazyLayout = lazy(() => import('./Layout.tsx'));

const Layout = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyLayout {...props} />
  </Suspense>
);

export default Layout;
