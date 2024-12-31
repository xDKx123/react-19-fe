import { lazy, Suspense } from 'react';
import { PBDialogProps } from './PBDialog.tsx';

const LazyPBDialog = lazy(() => import('./PBDialog.tsx'));

const PBDialog = (props: PBDialogProps) => (
  <Suspense fallback={null}>
    <LazyPBDialog {...props} />
  </Suspense>
);

export default PBDialog;
