import React from "react";
import "../ComponentsCss/NavBar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({setSearch}) => {
  
  const handleError = (e) => {
    setSearch(e.target.value)

  }

  return (
    
    <Navbar className='nav-bar' bg="dark" variant="dark">
      <Navbar.Brand href="#home">CockTail</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
        <Link to="/about us">
          <Nav.Link href="#home">About Us</Nav.Link>
        </Link>
        <Nav.Link href="#home"></Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={handleError} />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    
  );
};
export default NavBar;
