import { lazy, Suspense } from 'react';

const LazyNotFound404 = lazy(() => import('./NotFound404.tsx'));

const NotFound404 = () => (
  <Suspense fallback={null}>
    <LazyNotFound404 />
  </Suspense>
);

export default NotFound404;
