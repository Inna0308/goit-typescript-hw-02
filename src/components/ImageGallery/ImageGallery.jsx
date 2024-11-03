import ImageCard from "../ImageCard/ImageCard";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li className={styles.galleryItem} key={image.id}>
          <ImageCard
            className={styles.image}
            urls={image.urls}
            likes={image.likes}
            alt_description={image.alt_description}
            onClick={() => openModal(image.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
