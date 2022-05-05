import {React, useEffect} from 'react';
import ReactDOM  from 'react-dom';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/ModalOverlay';


const modalsContainer = document.querySelector('#modals');

export default function Modal({title, onClose, children}) {
    const handleEscKeydown = (e) => {
        e.key === "Escape" && onClose();
    };

    useEffect(() =>{
        document.addEventListener('keydown', handleEscKeydown);
        return () => {
            document.removeEventListener('keydown', handleEscKeydown);
        };
    }, []);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.title + "mt-10 ml-10 mr-10"}>
            <p className="text text_type_main-large">
               {title} 
            </p>
            <CloseIcon type="primary" onClick={onClose}/>
        </div>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalsContainer
  )
}

