import React from 'react';
import Modal from '@mui/material/Modal';

const CommonModal = ({ children, modalIsOpen, handleOpenModal, className }) => {
    return (
        <Modal
            open={modalIsOpen}
            onClose={() => handleOpenModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={className}
        >
            {children}
        </Modal>
    )
}
export default CommonModal