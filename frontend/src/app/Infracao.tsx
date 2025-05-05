import React from 'react';

import './Infracao.css';

import { Warning } from './Warning';

export default function Infracao({ data, handleClick }: { data: Warning, handleClick: (id: number) => void }) {
    return(
        <div className="infracao">
            <span className="data"><b>{data.data}</b></span>
            <span><b>Infrator: </b>{data.infrator}</span>
            <span><b>Relator: </b>{data.relator}</span>
            <span><b>Conteudo: </b>{data.conteudo}</span>
            <span><b>Descrição: </b>{data.descricao}</span>
            <button className="btn" onClick={() => handleClick(data.id)}>Excluir</button>
        </div>
    );
}
