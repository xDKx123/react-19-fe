import React, { lazy, Suspense } from 'react';

const LazyPBSnackbar = lazy(() => import('./PBSnackbar.tsx'));

const PBSnackbar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPBSnackbar {...props} />
  </Suspense>
);

export default PBSnackbar;
