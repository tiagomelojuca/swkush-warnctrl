import React from 'react'

import './BotaoFiltros.css'

export default function BotaoFiltros({ handleClick }: { handleClick: () => void }) {
    return <button className="btn-filtros" onClick={handleClick}>Filtros</button>
}
