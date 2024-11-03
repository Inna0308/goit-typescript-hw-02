import Modal from "react-modal";

import styles from "./ImageModal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  Modal.setAppElement("#root");

  return (
    <div>
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}>
        <button className={styles.button} onClick={closeModal}>
          ❌
        </button>
        {image && <img src={image} alt="Regular" className={styles.img} />}
      </Modal>
    </div>
  );
};

export default ImageModal;
