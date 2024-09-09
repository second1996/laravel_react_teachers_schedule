import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Main from './Main';
import './app.css';
import TSProvider from './contexts/TSContext';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f9f9f9',
      },
    },
  },
  fonts: {
    heading: 'Nunito, sans-serif',
    body: 'Nunito, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <TSProvider>
      <Main />
    </TSProvider>
  </ChakraProvider>
);
