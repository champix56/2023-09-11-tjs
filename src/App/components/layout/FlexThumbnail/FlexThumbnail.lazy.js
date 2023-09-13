import React, { lazy, Suspense } from 'react';

const LazyFlexThumbnail = lazy(() => import('./FlexThumbnail'));

const FlexThumbnail = props => (
  <Suspense fallback={null}>
    <LazyFlexThumbnail {...props} />
  </Suspense>
);

export default FlexThumbnail;
