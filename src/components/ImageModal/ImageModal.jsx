import Modal from "react-modal";
import { useEffect } from "react";
import s from "./ImageModal.module.css"; // Импорт стилей как модуль

const ImageModal = ({ isOpen, onRequestClose, largeImage, description }) => {
  // Закрываем модалку при нажатии клавиши ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modalContent} // Используем класс из CSS-модуля
      overlayClassName={s.modalOverlay} // Используем класс оверлея из CSS-модуля
    >
      <div
        onClick={onRequestClose}
        className={s.closeButton} // Класс для кнопки закрытия
      >
        Close
      </div>
      <img
        src={largeImage}
        alt={description}
        className={s.modalImage} // Класс для изображения
      />
    </Modal>
  );
};

export default ImageModal;
