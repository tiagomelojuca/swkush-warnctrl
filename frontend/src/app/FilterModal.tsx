import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function FilterModal({ isOpen, onRequestClose } : { isOpen: boolean, onRequestClose: () => void }) {
    function afterOpenModal() {
    }

    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <h2>Hello</h2>
            <button onClick={onRequestClose}>close</button>
            
            <div>I am a filter modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
    )
}
