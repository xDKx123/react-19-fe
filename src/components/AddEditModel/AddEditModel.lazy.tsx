import { lazy, Suspense } from 'react';

const LazyAddEditModel = lazy(() => import('./AddEditModel.tsx'));

const AddEditModel = () => (
  <Suspense fallback={null}>
    <LazyAddEditModel />
  </Suspense>
);

export default AddEditModel;
