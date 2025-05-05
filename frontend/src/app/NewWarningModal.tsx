import Modal from 'react-modal';

import { useState } from 'react';

import ModalBase from './ModalBase';
import './NewWarningModal.css';

import Officers from './Officers';
import Conteudos from './Conteudos';
import { Warning } from './Warning';

export default function NewWarningModal({ isOpen, onRequestClose, onSubmit } : {
    isOpen: boolean,
    onRequestClose: () => void,
    onSubmit: (warning: Warning) => void
}) {
    const [relator, setRelator] = useState<string>('');
    const [conteudo, setConteudo] = useState<string>('');
    const [infrator, setInfrator] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const warning: Warning = {
            relator,
            conteudo,
            infrator,
            descricao
        }

        onSubmit(warning);
        onRequestClose();
    }

    return (
        <ModalBase isOpen={isOpen} modalName="Nova Infração" onRequestClose={onRequestClose}>
            <form onSubmit={handleSubmit}>
                <div className="campo-infracao">
                    <label>Relator:</label>
                    <select value={relator} onChange={(e) => setRelator(e.target.value)}>
                    <option value="">Selecione...</option>
                    {Officers.map((nome, idx) => (
                        <option key={idx} value={nome}>{nome}</option>
                    ))}
                    </select>
                </div>

                <div className="campo-infracao">
                    <label>Conteúdo:</label>
                    <select value={conteudo} onChange={(e) => setConteudo(e.target.value)}>
                    <option value="">Selecione...</option>
                    {Conteudos.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))}
                    </select>
                </div>

                <div className="campo-infracao">
                    <label>Infrator:</label>
                    <input
                        type="text"
                        value={infrator}
                        onChange={(e) => setInfrator(e.target.value)}
                    />
                </div>

                <div className="campo-infracao">
                    <label>Descrição:</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>

                <button className="btn-adicionar" type="submit">Adicionar</button>
            </form>
        </ModalBase>
    )
}
