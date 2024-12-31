import { lazy, Suspense } from 'react';
import { UserHeaderDialogProps } from './UserHeaderDialog.tsx';

const LazyUserHeaderDialog = lazy(() => import('./UserHeaderDialog.tsx'));

const UserHeaderDialog = (props: UserHeaderDialogProps) => (
  <Suspense fallback={null}>
    <LazyUserHeaderDialog {...props} />
  </Suspense>
);

export default UserHeaderDialog;
