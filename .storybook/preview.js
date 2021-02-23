import React from 'react';
import { RecoProvider } from '@reco-ui/core';

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

export const decorators = [
  (Story) => (
    <RecoProvider>
      <Story />
    </RecoProvider>
  ),
];
