import { Image } from "react-bootstrap";
import Logo from "../assets/image/Logo.png";

export const PresentationSection = () => {
  return (
    <div className=" row presentacion">
      <div className="col-md-8 col-sm d-flex justify-content-center">
        <div className=" text-presentacion ">
          <h1 className="text-center ">Grown Green <br /> Punto Colombres</h1>
          <p className="text-center">
            Somos Grow Green Punto Colombres, un espacio de Crecimiento,
            Conección y Concreción. El primer HUB que reúne Tecnología y Triple
            Impacto en Argentina. Somos personas que pensamos en colaborar, Co
            crear, Conectar en entornos diferentes.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm d-flex justify-content-center">
        <Image src={Logo} fluid></Image>
      </div>
    </div>
  );
};