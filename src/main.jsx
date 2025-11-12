import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './components/Routes/Router';
 import { ToastContainer } from 'react-toastify';
import AuthProvider from './AuthContexts/AuthProvider';
import { RouterProvider } from 'react-router';
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>
<ToastContainer></ToastContainer>
  </StrictMode>,
)
