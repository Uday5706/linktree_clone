import React, { Suspense } from 'react';
import Generate from '@/components/Generate';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Generate />
    </Suspense>
  );
}
