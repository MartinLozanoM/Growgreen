import { Image } from "react-bootstrap";
import Logo from "../assets/image/LogoTransparenteVerde.png";

export const PresentationSection = () => {
  return (
    <>
    <div className="  container-fluid " id="presentation-section">
<div className="row presentacion p-2 pt-5">
      <div className="col-md-8 mt-5 pt-5 col-sm d-flex justify-content-center align-items-center mb-5 ">
        <div className=" text-presentacion ">
          <h1 className="text-center ">
            Grown Green <br /> Punto Colombres
          </h1>
          <p className="text-center">
            Somos Grow Green Punto Colombres, un espacio de Crecimiento,
            Conección y Concreción. El primer HUB que reúne Tecnología y Triple
            Impacto en Argentina. Somos personas que pensamos en colaborar, Co
            crear, Conectar en entornos diferentes.
          </p>
        </div>
      </div>
      <div className=" pt-5 col-md-4 col-sm d-flex justify-content-center align-item-center align-items-center p-5">
        <Image src={Logo} fluid className="LogoPresentation"></Image>
      </div>
      <div className="row pt-5">
    <div className="Presentation-divition col-md-8 rounded-end "></div>
    </div>
    </div>
    </div>
    </>
  );
};
