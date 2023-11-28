import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import AgonLogo from "../assets/image/Agon.png";
import ApiaLogo from "../assets/image/Apia.png";
import Arqui3Logo from "../assets/image/Arqui3.png";
import KosLogo from "../assets/image/kos-logo.jpeg";
import SalomonLogo from "../assets/image/salomon.jpeg";
import CeicytLogo from "../assets/image/ceicyt.jpeg";

export const CompanySection = () => {
  return (
    <Container className="company-section">
      <h3 className="section-title text-center">Empresas Aliadas</h3>
      <hr />
      <Row className="logo-row row-gap-3">
        <Col xs={12} md={4} className="companies-container">
          <Image src={AgonLogo} rounded fluid alt="Agon" />
        </Col>
        <Col xs={12} md={4} className="companies-container">
          <Image
            width={250}
            height={250}
            src={CeicytLogo}
            rounded
            fluid
            alt="Ceicyt"
          />
        </Col>
        <Col xs={12} md={4} className="companies-container">
          <Image src={KosLogo} rounded fluid alt="Kos-media" />
        </Col>
        <Col xs={12} md={4} className="companies-container">
          <Image src={SalomonLogo} rounded fluid alt="Salomon" />
        </Col>
        <Col xs={12} md={4} className="companies-container">
          <Image src={ApiaLogo} rounded fluid alt="Apia" />
        </Col>
      </Row>
    </Container>
  );
};
