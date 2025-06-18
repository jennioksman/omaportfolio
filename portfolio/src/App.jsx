
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Projects from './components/projects.jsx'
import Home from './components/home.jsx'
import Mie from './components/me.jsx'
import Skills from './components/skills.jsx'


const myRouter = createBrowserRouter([
  {
    path:'/',
    element: <NavigationBar/>,
    children: [
    { 
      path: '/',
      element: <Home1/>
    },
    {
      path: '/me',
      element: <Me/>
    },
    {
      path: '/projects',
      element: <MyProjects/>
    },
    {
      path: '/skills',
      element: <MySkills/>
    }
  ]
  }  
])


function App() {
  return (
    
    <RouterProvider router={myRouter} />
    
  )
}

function NavigationBar() {
  return(
    <div>
        <div className='nav'>
          <Link to={'/'}> Home </Link>
          <Link to={'/me'}> Minä </Link>
          <Link to={'/projects'}> Projektini </Link>
          <Link to={'/skills'}> Osaamiseni </Link>
        </div>
    <Outlet/>
    </div>
  )
}

function Home1() {
  return (
    <div>
      <Home/>
    </div>
  )
}

function Me() {
  return (
    <Mie/>
  )
}

function MyProjects() {
  return (
    <Projects/>
  )
}

function MySkills() {
  return (
    <Skills/>
  )
}


export default App
