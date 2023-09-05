import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/image/Logo3.jpg";

export const NavbarPagination = () => {
  return (
    <Navbar expand="md" className=" navbar-fixed">
      <Container className="navbar-container">
        <Navbar.Brand className="brand-container" href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="flex-md-grow-0" id="basic-navbar-nav">
          <Nav className="navbar-links">
            <ul className="d-md-flex">
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="presentation-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Presentacion
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="objetives-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Objetivos
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="featured-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Destacados
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Contacto
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="form-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Formulario
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
