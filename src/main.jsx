import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/user/LoginPage.jsx';
import RegisterPage from './pages/user/RegisterPage.jsx';
import TransactionDashboard from './pages/admin/TransactionDashboard.jsx';
import ShoesDashboard from './pages/admin/ShoesDashboard.jsx';
import CheckoutPage from './pages/user/CheckoutPage.jsx';
import Account from './pages/user/Account.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/shoes",
    element: <ShoesDashboard />
  },
  {
    path: "/transaction",
    element: <TransactionDashboard />
  },
  {
    path: "/checkout",
    element: <CheckoutPage />
  },
  {
    path: "/account",
    element: <Account />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
