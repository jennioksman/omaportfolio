import { useState } from 'react'
import '../App.css'
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <div className='nav'>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item className='navitem'>
          <Nav.Link href="/home">Koti</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navitem'>
          <Nav.Link eventKey="link-1">Minä</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navitem'>
          <Nav.Link eventKey="link-2">Projekteja</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navitem'>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

  );
}

function Header() {
  return (
    <h1>Tervetulloo</h1>
  )
}

export { Navigation, Header }