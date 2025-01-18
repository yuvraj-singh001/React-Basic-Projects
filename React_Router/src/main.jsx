import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact_us/Contact_us.jsx'
import User from './Components/User/User.jsx'
import Github, { githubinfoloader } from './Components/Github/Github.jsx'

// the two syntax are used for routing on pages

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"contact_us",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>} >
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='contact_us' element = {<Contact/>} />
      <Route 
      loader={githubinfoloader}
      path='github' 
      element = {<Github/>} />
      {/* user is already exist in user file */}
      <Route path='user/:userid' element = {<User/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
