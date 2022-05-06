import React from 'react';
import styles from './ModalOverlay.module.css';

export default function ModalOverlay({onClick}) {
    return (
        <div className={styles.modal_overlay} onClick={onClick}>   
        </div>
    )
}