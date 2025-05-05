import React from 'react';

import { useState, useEffect } from 'react';

import ConfirmaExclusaoModal from './ConfirmaExclusaoModal';

import './Infracao.css';

import { Warning } from './Warning';

export default function Infracao({ data, handleClick }: { data: Warning, handleClick: (id: number) => void }) {
    const [modalConfirmacaoIsOpen, setModalConfirmacaoIsOpen] = useState(false);

    function handleConfirmDeletion() {
        handleClick(data.id);
        setModalConfirmacaoIsOpen(false);
    };

    return(
        <div className="infracao">
            <span className="data"><b>{data.data}</b></span>
            <span><b>Infrator: </b>{data.infrator}</span>
            <span><b>Relator: </b>{data.relator}</span>
            <span><b>Conteudo: </b>{data.conteudo}</span>
            <span className="descricao"><b>Descrição: </b></span>
            <span className="descricaoText">{data.descricao}</span>
            <button className="btn" onClick={() => setModalConfirmacaoIsOpen(true)}>Excluir</button>

            <ConfirmaExclusaoModal
                isOpen={modalConfirmacaoIsOpen}
                onRequestClose={() => setModalConfirmacaoIsOpen(false)}
                handleYes={handleConfirmDeletion}
            />
        </div>
    );
}
