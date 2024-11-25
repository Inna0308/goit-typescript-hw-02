import ImageCard from "../ImageCard/ImageCard";

import { ImageGalleryProps } from "../types";

import styles from "./ImageGallery.module.css";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li className={styles.galleryItem} key={image.id}>
          <ImageCard
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
