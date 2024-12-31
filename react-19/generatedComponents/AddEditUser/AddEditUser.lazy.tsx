import React, { lazy, Suspense } from 'react';

const LazyAddEditUser = lazy(() => import('./AddEditUser'));

const AddEditUser = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAddEditUser {...props} />
  </Suspense>
);

export default AddEditUser;
