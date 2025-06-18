
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
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
    <div>
      <RouterProvider router={myRouter} />
      <Footer/>
    </div>
    
  )
}

function NavigationBar() {
  return(
    <div className='navDiv'>
       <Navbar expand="md" className="nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Koti</Nav.Link>
              <Nav.Link as={Link} to="/me">Minä</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projektini</Nav.Link>
              <Nav.Link as={Link} to="/skills">Osaamiseni</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Outlet />
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

function Footer() {
  return(
    <div className='footer'>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <hr className="clearfix w-100 d-md-none pb-0"/>
            </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2025 Copyright:
            <p>Jenni Oksman</p>
        </div>
      </footer>
    </div>
  )
}


export default App
