import { Image } from "react-bootstrap";
import Logo from "../assets/image/LogoTransparenteVerde.png";
import { Button } from "react-scroll";

export const PresentationSection = () => {
  return (
    <div className="container-fluid all-section" id="presentation-section">
      <div className="section-size row presentacion p-2 ">
        <div className="col-md-8 mt-5 pt-5 col-sm d-flex flex-column justify-content-center align-items-center mb-5 ">
          <div className=" text-presentacion ">
            <h1 className="text-center ">
              Grown Green <br /> Punto Colombres
            </h1>
            <p className="text-center">
              Somos Grow Green Punto Colombres, un espacio de Crecimiento,
              Conección y Concreción. El primer HUB que reúne Tecnología y
              Triple Impacto en Argentina. Somos personas que pensamos en
              colaborar, Co crear, Conectar en entornos diferentes.
            </p>
          </div>
          <Button
            activeClass="active"
            className="presentation-button"
            type="submit"
            value="Solicitar informacion"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-75}
            duration={100}
          ></Button>
        </div>
        <div className="pt-5 col-md-4 col-sm d-flex justify-content-center align-item-center align-items-center p-5">
          <Image
            src={Logo}
            fluid
            className="LogoPresentation"
            alt="Logo Presentation-Section"
          ></Image>
        </div>
      </div>
    </div>
  );
};
