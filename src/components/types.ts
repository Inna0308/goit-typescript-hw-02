export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  likes: number;
  alt_description?: string;
}

export interface ImageCardProps {
  urls: {
    regular: string;
    small: string;
  };
  likes: number;
  alt_description?: string;
  onClick: () => void;
}

export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: string) => void;
}

export interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  image: string;
}

export interface LoadMoreBtnProps {
  loadMore: () => void;
}

export interface SearchBarProps {
  setSearchValue: (userValue: string) => void;
  resetSearch: () => void;
}
