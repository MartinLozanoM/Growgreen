import { Image } from "react-bootstrap";
import Logo from "../assets/image/Logo.png";
import { AxesSection } from "./AxesSection.jsx";

export const FeaturedSection = () => {
  return (
    <div
      className="section-size container-fluid  featured-container"
      id="featured-section"
    >
      
      <div className="row p-4  ">
      <h2 className="text-center p-3 featured-title ">¿Que buscamos?</h2>
        <div className="col-md-4 col-sm-12 d-flex justify-content-around flex-column p-4">
          <div className="featured-left p-2 ">
            <h2>Cordialidad y Educación</h2>
            <p>
              Enfoque en la persona porque creemos que no hay empresas que
              perduren en el tiempo sin personas educadas, comprometidas y con
              una mirada eólica
            </p>
          </div>
          <div className="featured-left p-2">
            <h2>Calidad e Innovación</h2>
            <p>
              Construir y apoyar el desarrollo Sostenible por medio de un
              servicio de alta calidad.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center p-4">
          <Image
            src={Logo}
            className="Logo-Featured"
            alt="Logo Featured-Section"
          />
          
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-around flex-column text-white p-4">
          <div className="featured-rigth p-2">
            <h2>Colaboración</h2>
            <p>
              Trabajo en equipo e intercambio de conocimientos y experiencias
            </p>
          </div>
          <div className="featured-rigth p-2">
            <h2>Apasionados</h2>
            <p>
              Comprometidos con el auténtico motor que mueve el Ser, La Pasión
            </p>
          </div>
        </div>
      </div>
      <AxesSection />
    </div>
  );
};
