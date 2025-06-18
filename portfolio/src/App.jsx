import { useState } from 'react'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Nav from 'react-bootstrap/Nav'
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
    <div>
      <RouterProvider router={myRouter}/>
    </div>
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
      console.log("Home1 näkyy")
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
