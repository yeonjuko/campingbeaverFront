import React,{usestate} from 'react'
import styles from './Header.module.scss'
import logo from '../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
        <img src={logo} width='200px'></img>
        </div> 
        <Navbar bg="none" expand="lg" className={styles.navbar} >
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">CART</Nav.Link>
            <NavDropdown title="MYPAGE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          </div>
    
    </header>
  )
}

export default Header