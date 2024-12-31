import React, { lazy, Suspense } from 'react';

const LazyPBWarningDialog = lazy(() => import('./PBWarningDialog.tsx'));

const PBWarningDialog = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyPBWarningDialog {...props} />
  </Suspense>
);

export default PBWarningDialog;
