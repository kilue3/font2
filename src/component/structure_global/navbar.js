import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

const NavBar = () => {
  const session = {
    id: localStorage.getItem("id"),
    fname: localStorage.getItem("fname"),
    uname: localStorage.getItem("username"),
    status: localStorage.getItem("status"),
  };
  const [ses, setSes] = useState(session);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("username");
    localStorage.removeItem("status");
    window.location.assign("/");
  };
  const toggle = () => setIsOpen(!isOpen);
  if (session.status === "admin") {
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-lg navbar-light sticky-top shadow-box-example "
          color="white"
          light
          expand="md"
          style={{ maxWidth: "auto" }}
        >
          <Container
            className="container-fluid TZS-Container"
            style={{ maxWidth: "1700px" }}
          >
            <img
              className="buttonMenuIcon"
              src="https://cdn-icons-png.flaticon.com/512/2325/2325673.png"
              style={{ Width: "auto", height: "30px" }}
            />

            <NavbarBrand
              href="/adminpage"
              style={{ color: "#f8813a", fontSize: "30px" }}
            >
              <b>ระบบวางบิล Online</b>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar></Nav>
              <a href="">
                <NavLink style={{ paddingLeft: "0px", paddingRight: "5px" }}>
                  {session.fname} {session.lname}
                </NavLink>
              </a>
              <NavLink style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Button
                  onClick={logout}
                  outline
                  color="danger"
                  className="Button-Style"
                  style={{ marginLeft: "10px" }}
                >
                  ออกจากระบบ
                </Button>
              </NavLink>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  } else if (session.status === "normal") {
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-lg navbar-light sticky-top shadow-box-example "
          color="white"
          light
          expand="md"
          style={{ maxWidth: "auto" }}
        >
          <Container
            className="container-fluid TZS-Container"
            style={{ maxWidth: "1700px" }}
          >
              <img
              className="buttonMenuIcon"
              src="https://cdn-icons-png.flaticon.com/512/2325/2325673.png"
              style={{ Width: "auto", height: "30px" }}
            />

            <NavbarBrand
              href="/adminpage"
              style={{ color: "#f8813a", fontSize: "30px" }}
            >
              <b>ระบบวางบิล Online</b>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/"></NavLink>
                </NavItem>
              </Nav>
              <a href="/profile">
                <NavLink style={{ paddingLeft: "0px", paddingRight: "5px" }}>
                  {session.fname} {session.lname}
                </NavLink>
              </a>
              <NavLink style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Button
                  onClick={logout}
                  outline
                  color="danger"
                  className="Button-Style"
                  style={{ marginLeft: "10px" }}
                >
                  ออกจากระบบ
                </Button>
              </NavLink>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-lg navbar-light sticky-top shadow-box-example "
          color="white"
          light
          expand="md"
          style={{ maxWidth: "auto" }}
        >
          <Container
            className="container-fluid TZS-Container"
            style={{ maxWidth: "1700px" }}
          >
            <NavbarBrand href="/" style={{ color: "#f8813a" }}>
              ระบบวางบิล<h5>Online</h5>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/"></NavLink>
                </NavItem>
              </Nav>
              <a href="/profile">
                <NavLink style={{ paddingLeft: "0px", paddingRight: "5px" }}>
                  {session.fname} {session.lname}
                </NavLink>
              </a>
              <NavLink style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Button
                  onClick={logout}
                  outline
                  color="danger"
                  className="Button-Style"
                  style={{ marginLeft: "10px" }}
                >
                  ออกจากระบบ
                </Button>
              </NavLink>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
};

export default NavBar;
