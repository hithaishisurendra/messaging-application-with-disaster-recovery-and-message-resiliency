import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import ChatProvider from './context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
          <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);

