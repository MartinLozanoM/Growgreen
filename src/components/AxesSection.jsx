import { Image } from "react-bootstrap";
import Team from "../assets/image/Team.jpg";

export const AxesSection = () => {
  return (
    <div className="section-size container-fluid all-section text-center">
      <h2 className="mb-3">Ejes de Growgreen</h2>
      <div className="d-md-flex mb-3">
        <div className="col-md-6 d-md-flex flex-md-column justify-content-md-center p-3 axes-one">
          <h3>Sustentabilidad</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            explicabo voluptates labore quisquam optio porro natus nihil sint
            eius dicta aspernatur doloremque atque ad amet maxime, facere
            asperiores dolorem obcaecati!
          </p>
        </div>
        <div className="col-md-6">
          <Image className="p-3" src={Team} fluid />
        </div>
      </div>
      <div className="d-md-flex mb-3">
        <div className="col-md-8">
          <Image className="p-3" src={Team} fluid />
        </div>
        <div className="col-md-4 d-md-flex flex-md-column justify-content-md-center p-3 axes-two">
          <h3>Sostenibilidad</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            explicabo voluptates labore quisquam optio porro natus nihil sint
            eius dicta aspernatur doloremque atque ad amet maxime, facere
            asperiores dolorem obcaecati!
          </p>
        </div>
      </div>
      <div className="d-md-flex mb-3">
        <div className="col-md-6 d-md-flex flex-md-column justify-content-md-center p-3 axes-one">
          <h3>Tecnologia</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            explicabo voluptates labore quisquam optio porro natus nihil sint
            eius dicta aspernatur doloremque atque ad amet maxime, facere
            asperiores dolorem obcaecati!
          </p>
        </div>
        <div className="col-md-6">
          <Image className="p-3" src={Team} fluid />
        </div>
      </div>
    </div>
  );
};
