import Modal from 'react-modal';

import ModalBase from './ModalBase';
import './FilterModal.css';

export default function FilterModal({ isOpen, onRequestClose } : { isOpen: boolean, onRequestClose: () => void }) {
    return (
        <ModalBase isOpen={isOpen} modalName="Filtros" onRequestClose={onRequestClose}>
            <p>foo.filter</p>
        </ModalBase>
    )
}
