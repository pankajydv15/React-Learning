import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Routes from './Routes'
import Home from './Components/Home/Home'
import Card from './Components/Home/Card'
import Counter from './Components/Projects/01_Counter/Counter'
import Toggle from  './Components/Projects/02_Toggle/Toggle'
import BgChanger from './Components/Projects/03_Bg_Changer/BgChanger'
import PasswordGenerator from './Components/Projects/04_PasswordGenerator/PasswordGenerator'
import Github from './Components/Github/Github'
import About from './Components/About/About'


const router = createBrowserRouter([
  { 
    path: '/',
    element:<Routes/>,
    children:[
      { 
        path: '/',
        element:<Home/>
      },

      { 
        path: '/card',
        element:<Card/>
      },

      { 
        path: '/Counter',
        element:<Counter/>
      },

      { 
        path: '/Toggle',
        element:<Toggle/>
      },

      { 
        path: '/BgChanger',
        element:<BgChanger/>
      },

      { 
        path: '/PasswordGenerator',
        element:<PasswordGenerator/>
      },

      { 
        path: '/Github',
        element:<Github/>
      },

      { 
        path: '/About',
        element:<About/>
      }
    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
