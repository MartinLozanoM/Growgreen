import React, { useState } from "react";
import Photo1 from "../assets/Hub/photo_4965651848753163451_y.jpg";
import Photo2 from "../assets/Hub/oficina2.jpeg";
import Photo3 from "../assets/Hub/photo_4965651848753163455_y.jpg";
import Photo4 from "../assets/Hub/photo_4965651848753163453_y.jpg";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const OfficeGallery = () => {
  const offices = [
    {
      id: 1,
      name: "Oficina 1",
      imageUrl: Photo1,
    },
    {
      id: 2,
      name: "Oficina 2",
      imageUrl: Photo2,
    },
    {
      id: 3,
      name: "Oficina 3",
      imageUrl: Photo3,
    },
    {
      id: 4,
      name: "Oficina 4",
      imageUrl: Photo4,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  return (
    <div className="container pt-5">
      <h3 className="section-title">Nuestras Oficinas</h3>
      <hr />
      <div className="row">
        {offices.map((office) => (
          <div key={office.id} className="col-md-3">
            <div className="card mb-4 card-container">
              <div className="image-container">
                <img
                  src={office.imageUrl}
                  className="card-img-top office-image"
                  alt={office.name}
                  onClick={() => openModal(office.imageUrl)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modalOpen} onClose={closeModal} center>
        <img
          src={selectedImage}
          alt="Imagen ampliada"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            margin: "0 auto",
            display: "block",
          }}
        />
      </Modal>
    </div>
  );
};

export default OfficeGallery;
