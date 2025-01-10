import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import './index.css'
import App from './App.tsx'

import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider  forceColorScheme='dark'>
      <App />
    </MantineProvider>
  </StrictMode>,
)
