import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Page/Home.jsx'
import About from './Page/About.jsx'
import Blog from './Page/Blog.jsx'
import Community from './Page/Community.jsx'
import Registration from './Page/Registration.jsx'
import Login from './Page/Login.jsx'
import Profile from './Page/Profile.jsx'
import Profilepages from './Page/Profilepages.jsx'
import Message from './Page/Message.jsx'

const rout = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      }, 
      {
        path: '/about',
        element: <About />
      }, 
      {
        path: '/blog',
        element: <Blog />
      }, 
      {
        path: '/community',
        element: <Community />
      },
      {
        path:'/sign',
        element:<Registration/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/Profile',
        element:<Profile/>
      },
      {
        path:'/profile/:data',
        element:<Profilepages/>
      },
      {
        path:'/message/:id',
        element:<Message/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={rout} />
)
