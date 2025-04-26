import React, { lazy, Suspense } from 'react';

const LazyLogoutButton = lazy(() => import('./LogoutButton.tsx'));

const LogoutButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLogoutButton {...props} />
  </Suspense>
);

export default LogoutButton;
