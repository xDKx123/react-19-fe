import React, { lazy, Suspense } from 'react';

const LazyBrowseView = lazy(() => import('./BrowseView.tsx'));

const BrowseView = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyBrowseView {...props} />
  </Suspense>
);

export default BrowseView;
