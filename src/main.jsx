import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from './components/ProtectedRoutes.jsx'



const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<ProtectedRoutes component={<Home/>}/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>

    </RouterProvider>
 
)
