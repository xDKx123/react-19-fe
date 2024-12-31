import { lazy, Suspense } from 'react';

const LazyHomePage = lazy(() => import('./HomePage'));

const HomePage = () => (
  <Suspense fallback={null}>
    <LazyHomePage />
  </Suspense>
);

export default HomePage;
