import { lazy, Suspense } from 'react';

const LazyLoginPage = lazy(() => import('./LoginPage.tsx'));

const LoginPage = () => (
  <Suspense fallback={null}>
    <LazyLoginPage />
  </Suspense>
);

export default LoginPage;
