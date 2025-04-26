import { lazy, Suspense } from 'react';
import { PBDeleteButtonProps } from './PBDeleteButton.tsx';

const LazyPBDeleteButton = lazy(() => import('./PBDeleteButton.tsx'));

const PBDeleteButton = (props: PBDeleteButtonProps) => (
  <Suspense fallback={null}>
    <LazyPBDeleteButton {...props} />
  </Suspense>
);

export default PBDeleteButton;
