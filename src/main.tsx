import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { TanstackQueryProvider } from './provider/TanstackQueryProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <TanstackQueryProvider>
        <App />
      </TanstackQueryProvider>
    </ChakraProvider>
  </React.StrictMode>
);
