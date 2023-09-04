import { FC, memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { IModal } from './interface';

import styles from './styles.module.scss';

export const Modal: FC<IModal> = memo(({ children, onClose, isOpen }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  console.log(isOpen, onClose);

  return createPortal(
    <div
      className={isOpen ? styles.modal : styles.modalActive}
      onClick={onClose}
      data-cy='modal'
    >
      <div
        className={isOpen ? styles.modalContentActive : styles.modalContent}
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
});
