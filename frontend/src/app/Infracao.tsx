import React from 'react';

import './Infracao.css';

interface Warning {
    id: number,
    infrator: string,
    conteudo: string,
    descricao: string,
    relator: string,
    data: string
}

export default function Infracao({ data }: { data: Warning }) {
    return(
        <div className="infracao">
            <span className="data"><b>{data.data}</b></span>
            <span><b>Infrator: </b>{data.infrator}</span>
            <span><b>Relator: </b>{data.relator}</span>
            <span><b>Conteudo: </b>{data.conteudo}</span>
            <span><b>Descrição: </b>{data.descricao}</span>
            <button className="btn">Excluir</button>
        </div>
    );
}
