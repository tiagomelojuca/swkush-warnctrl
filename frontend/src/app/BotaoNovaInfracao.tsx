import React from 'react'

import './BotaoNovaInfracao.css'

export default function BotaoNovaInfracao({ handleClick }: { handleClick: () => void }) {
    return <button className="btn-nova-infracao" onClick={handleClick}>Nova Infração</button>
}
