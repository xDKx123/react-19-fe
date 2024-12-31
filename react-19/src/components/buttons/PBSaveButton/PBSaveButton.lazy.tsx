import { lazy, Suspense } from 'react';
import { PBSaveButtonProps } from './PBSaveButton.tsx';

const LazyPBSaveButton = lazy(() => import('./PBSaveButton.tsx'));

const PBSaveButton = (props: PBSaveButtonProps) => (
  <Suspense fallback={null}>
    <LazyPBSaveButton {...props} />
  </Suspense>
);

export default PBSaveButton;
