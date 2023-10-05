import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import AgonLogo from "../assets/image/Agon.png";
import ApiaLogo from "../assets/image/Apia.png";
import Arqui3Logo from "../assets/image/Arqui3.png";

export const CompanySection = () => {
  return (
    <Container className="company-section">
      <h3 className="section-title">Empresas Aliadas</h3>
      <hr />
      <Row className="logo-row">
        <Col xs={6} md={4}>
          <Image src={AgonLogo} rounded fluid alt="Agon" />
        </Col>
        <Col xs={6} md={4}>
          <Image src={ApiaLogo} rounded fluid alt="Apia" />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Arqui3Logo} rounded fluid alt="Arqui3" />
        </Col>
      </Row>
    </Container>
  );
};
