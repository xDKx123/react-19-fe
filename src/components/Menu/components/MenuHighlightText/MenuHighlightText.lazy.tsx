import React, { lazy, Suspense } from 'react';

const LazyMenuHighlightText = lazy(() => import('./MenuHighlightText.tsx'));

const MenuHighlightText = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMenuHighlightText {...props} />
  </Suspense>
);

export default MenuHighlightText;
