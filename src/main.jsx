import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { getTodos, postTodo } from '../my-api'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode> 
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
      </QueryClientProvider>
    
  </StrictMode>,
)
