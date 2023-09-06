import { Image } from "react-bootstrap";
import Logo from "../assets/image/LogoTransparente.png";

export const FeaturedSection = () => {
  return (
    <>
      <div className="featured row p-4">
        <div className="col-md-4 col-sm-12 d-flex justify-content-around flex-column  ">
          <div className="featured-left p-2">
            <h2>Cordialidad y Educación</h2>
            <p>
              Enfoque en la persona porque creemos que no hay empresas que
              perduren en el tiempo sin personas educadas, comprometidas y con
              una mirada eólica
            </p>
          </div>
          <div className="featured-left p-2">
            <h2>Sostenibilidad</h2>
            <p>Construir y apoyar el desarrollo Sostenible</p>
          </div>
          <div className="featured-left p-2">
            <h2>Innovación</h2>
            <p>Construir y apoyar el desarrollo Sostenible</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center p-2">
          <Image src={Logo} fluid></Image>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-around flex-column text-white ">
         
          <div className="featured-rigth p-2">
            <h2>Colaboración</h2>
            <p>
            Trabajo en equipo e intercambio de conocimientos y 
experiencias
            </p>
          </div>
          <div className="featured-rigth p-2">
            <h2>Calidad</h2>
            <p>Servicios de Alta Calidad</p>
          </div>
          <div className="featured-rigth p-2">
            <h2>Apasionados</h2>
            <p>Comprometidos con el auténtico
motor que mueve el Ser, La Pasión</p>
          </div>
        </div>
      </div>
    </>
  );
};
