import { lazy, Suspense } from 'react';
import { PBCancelButtonProps } from './PBCancelButton.tsx';

const LazyPBCancelButton = lazy(() => import('./PBCancelButton.tsx'));

const PBCancelButton = (props: PBCancelButtonProps) => (
  <Suspense fallback={null}>
    <LazyPBCancelButton {...props} />
  </Suspense>
);

export default PBCancelButton;
