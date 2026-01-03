import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './components/Routes/Router';
 import { ToastContainer } from 'react-toastify';
import AuthProvider from './AuthContexts/AuthProvider';
import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
  <AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>
<ToastContainer></ToastContainer>
</QueryClientProvider>
  </StrictMode>,
)
