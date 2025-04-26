import React, { lazy, Suspense } from 'react';

const LazyDefaultBrowsePage = lazy(() => import('./DefaultBrowsePage.tsx'));

const DefaultBrowsePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDefaultBrowsePage {...props} />
  </Suspense>
);

export default DefaultBrowsePage;
