import Image from 'next/image'

import BotaoFiltros from './BotaoFiltros'
import BotaoNovaInfracao from './BotaoNovaInfracao'
import Infracao from './Infracao'

export default function Home() {
  const data = [
    {
      id: 8,
      infrator: "tapiocaferoz",
      conteudo: "siege",
      descricao: "foo",
      relator: "tapiocaferoz",
      data: "2025-05-05T02:07:05.000Z"
    },
    {
      id: 9,
      infrator: "Tyfurion",
      conteudo: "gw",
      descricao: "foo",
      relator: "tapiocaferoz",
      data: "2025-05-05T02:07:06.000Z"
    }
  ]

  return (
    <div className='main-wrapper flex flex-col items-center justify-center'>

      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Summoners Kush"
      />

      <div className="menu">
        <BotaoFiltros/>
        <BotaoNovaInfracao/>
      </div>

      {
        data.map(item => <Infracao key={item.id} data={item}/>)
      }
    </div>
  );
}
