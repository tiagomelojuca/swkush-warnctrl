import ModalBase from './ModalBase';

import './ConfirmaExclusaoModal.css';

export default function ConfirmaExclusaoModal({ isOpen, onRequestClose, handleYes } : {
    isOpen: boolean,
    onRequestClose: () => void,
    handleYes: () => void
}) {
    return (
        <ModalBase isOpen={isOpen} modalName="Confirma exclusão?" onRequestClose={onRequestClose}>
            <div className="modal-confirma-exclusao-wrapper">
                <button className="btn-sim" onClick={handleYes}>Sim</button>
                <button className="btn-nao" onClick={onRequestClose}>Não</button>
            </div>
        </ModalBase>
    )
}
