import ModalBase from './ModalBase';

export default function ErroModal({ isOpen, errMsg, onRequestClose } : {
    isOpen: boolean,
    errMsg: string,
    onRequestClose: () => void
}) {
    return (
        <ModalBase isOpen={isOpen} modalName="Erro" onRequestClose={onRequestClose}>
            <p>{errMsg}</p>
        </ModalBase>
    )
}
