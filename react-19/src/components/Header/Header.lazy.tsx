import { lazy, Suspense } from 'react';

const LazyHeader = lazy(() => import('./Header'));

const Header = () => (
  <Suspense fallback={null}>
    <LazyHeader />
  </Suspense>
);

export default Header;
