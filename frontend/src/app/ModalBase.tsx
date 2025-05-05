import Modal from 'react-modal';

import './ModalBase.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
    },
};

export default function ModalBase({ isOpen, modalName, onRequestClose, children } : {
    isOpen: boolean,
    modalName: string,
    onRequestClose: () => void,
    children: any
}) {
    function afterOpenModal() {}

    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel={modalName}
            ariaHideApp={false}
        >
            <div className="modal-wrapper">
                <h1>{modalName}</h1>
                <button className="btn-close-modal" onClick={onRequestClose}>X</button>
                {children}
            </div>
        </Modal>
    )
}
