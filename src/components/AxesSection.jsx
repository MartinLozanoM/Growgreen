import { Image } from "react-bootstrap";
import Innovacion from "../assets/image/Innovacion.jpg";
import Tecnologia from "../assets/image/Tecnologia.jpeg";
import TripleImpacto from "../assets/image/TripleImpacto.jpeg";

export const AxesSection = () => {
  return (
    <div className="section-size container-fluid all-section text-center">
      <h2 className="mb-3">Ejes de Growgreen</h2>
      <div className="d-md-flex mb-3">
        <div className="col-md-6 d-md-flex flex-md-column justify-content-md-center p-3 axes-one">
          <h3>Innovación</h3>
          <p>
            es un marco de colaboración creado para promover el desarrollo y la
            ejecución de proyectos de edificación de acuerdo con los principios
            “de cuna a la cuna” y la economía circular. Es una iniciativa
            orientada al intercambio de conocimiento para el desarrollo y la
            implementación de proyectos innovadores.
          </p>
        </div>
        <div className="col-md-6">
          <Image className="p-3" src={Innovacion} fluid />
        </div>
      </div>
      <div className="d-md-flex mb-3">
        <div className="col-md-8">
          <Image className="p-3" src={Tecnologia} fluid />
        </div>
        <div className="col-md-4 d-md-flex flex-md-column justify-content-md-center p-3 axes-two">
          <h3>Tecnología</h3>
          <p>
            Ofrecemos la oportunidad de coincidir, conocerse, trabajar juntos,
            construir redes y comunidades. El objetivo de este pilar tecnológico
            es la cristalización de nuevas innovaciones derivadas de reunir en
            un mismo lugar a muchos emprendedores con intereses de desarrollo
            comunes.
          </p>
        </div>
      </div>
      <div className="d-md-flex mb-3">
        <div className="col-md-6 d-md-flex flex-md-column justify-content-md-center p-3 axes-one">
          <h3>Triple impacto</h3>
          <p>
            Enfocándonos en tres pilares: El valor económico con la búsqueda de
            la rentabilidad, la mirada social vinculada a la inclusión y la
            equidad, y el impacto ambiental que generan las actividades
            económicas y productivas.
          </p>
        </div>
        <div className="col-md-6">
          <Image className="p-3" src={TripleImpacto} fluid />
        </div>
      </div>
    </div>
  );
};
