import Modal from 'react-modal';

import ModalBase from './ModalBase';
import './NewWarningModal.css';

export default function NewWarningModal({ isOpen, onRequestClose } : { isOpen: boolean, onRequestClose: () => void }) {
    return (
        <ModalBase isOpen={isOpen} modalName="Nova Infração" onRequestClose={onRequestClose}>
            <p>foo.warning</p>
        </ModalBase>
    )
}
