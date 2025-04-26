import React, { lazy, Suspense } from 'react';

const LazyGeneralEdit = lazy(() => import('./GeneralEdit'));

const GeneralEdit = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGeneralEdit {...props} />
  </Suspense>
);

export default GeneralEdit;
