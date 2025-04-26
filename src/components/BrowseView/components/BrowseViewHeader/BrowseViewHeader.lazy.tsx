import React, { lazy, Suspense } from 'react';

const LazyBrowseViewHeader = lazy(() => import('./BrowseViewHeader.tsx'));

const BrowseViewHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBrowseViewHeader {...props} />
  </Suspense>
);

export default BrowseViewHeader;
