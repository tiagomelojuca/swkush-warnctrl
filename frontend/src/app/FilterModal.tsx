import { useState } from 'react';

import ModalBase from './ModalBase';
import './FilterModal.css';

import Officers from './Officers';
import Conteudos from './Conteudos';
import { QueryOptions } from './QueryUrlAssembler';

export default function FilterModal({ isOpen, onRequestClose, onSubmit } : {
    isOpen: boolean,
    onRequestClose: () => void,
    onSubmit: (params: QueryOptions) => void
}) {
    const [relator, setRelator] = useState<string>('');
    const [conteudo, setConteudo] = useState<string>('');
    const [infrator, setInfrator] = useState<string>('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const params: QueryOptions = {
            relator,
            conteudo,
            infrator
        }

        onSubmit(params);
        onRequestClose();
    }

    return (
        <ModalBase isOpen={isOpen} modalName="Filtros" onRequestClose={onRequestClose}>
            <form onSubmit={handleSubmit}>
                <div className="campo-filtro">
                    <label>Relator:</label>
                    <select value={relator} onChange={(e) => setRelator(e.target.value)}>
                    <option value="">Selecione...</option>
                    {Officers.map((nome, idx) => (
                        <option key={idx} value={nome}>{nome}</option>
                    ))}
                    </select>
                </div>

                <div className="campo-filtro">
                    <label>Conteúdo:</label>
                    <select value={conteudo} onChange={(e) => setConteudo(e.target.value)}>
                    <option value="">Selecione...</option>
                    {Conteudos.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))}
                    </select>
                </div>

                <div className="campo-filtro">
                    <label>Infrator:</label>
                    <input
                        type="text"
                        value={infrator}
                        onChange={(e) => setInfrator(e.target.value)}
                    />
                </div>

                <button className="btn-filtrar" type="submit">Filtrar</button>
            </form>
        </ModalBase>
    )
}
