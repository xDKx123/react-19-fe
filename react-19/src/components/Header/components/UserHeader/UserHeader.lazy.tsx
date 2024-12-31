import React, { lazy, Suspense } from 'react';

const LazyUserHeader = lazy(() => import('./UserHeader.tsx'));

const UserHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserHeader {...props} />
  </Suspense>
);

export default UserHeader;
