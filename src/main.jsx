import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProtectedRoute from "./ProtectedRoutes";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
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
import Rendring from './Components/Projects/05_UseEffect/Rendring'
import Login from './Components/Login/Login'
import Projects from './Components/Home/Projects'
import Signup from './Components/Signup/Signup'


// const router = createBrowserRouter([
//   { 
//     path: '/',
//     element:<Routes/>,
//     children:[
//       { 
//         path: '/',
//         element:<Home/>
//       },

//       { 
//         path: '/card',
//         element:<Card/>
//       },

//       { 
//         path: '/Counter',
//         element:<Counter/>
//       },

//       { 
//         path: '/Toggle',
//         element:<Toggle/>
//       },

//       { 
//         path: '/BgChanger',
//         element:<BgChanger/>
//       },

//       { 
//         path: '/PasswordGenerator',
//         element:<PasswordGenerator/>
//       },

//       { 
//         path: '/Github',
//         element:<Github/>
//       },

//       { 
//         path: '/About',
//         element:<About/>
//       },

//       { 
//         path: '/Render',
//         element:<Rendring/>
//       }
//     ]
//   },

// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Routes/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='/Projects' element= {<Projects/>}/>
      <Route path='/Counter' element= {<Counter/>}/>
      <Route path='/Toggle' element= {<Toggle/>}/>
      <Route path='/BgChanger' element= {<BgChanger/>}/>
      <Route path='/PasswordGenerator' element= {<PasswordGenerator/>}/>
      <Route path='/Github' element= {<Github/>}/>
      <Route path='/About' element= {<About/>}/>
      <Route path='/Render' element= {<Rendring/>}/>
      <Route path='/Login' element= {<Login/>}/>
      <Route
          path="/card"
          element={
            <ProtectedRoute>
              <Card />
            </ProtectedRoute>
          }
        />
      <Route path='/Signup' element= {<Signup/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
