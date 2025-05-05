import ModalBase from './ModalBase';

export default function ErroModal({ isOpen, onRequestClose } : {
    isOpen: boolean,
    onRequestClose: () => void
}) {
    return (
        <ModalBase isOpen={isOpen} modalName="Erro!" onRequestClose={onRequestClose}>
            <p>Preencha todos os campos!</p>
        </ModalBase>
    )
}
