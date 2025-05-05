"use client";

import { useState, useEffect } from 'react';

import Image from 'next/image'

import api from './api';

import BotaoFiltros from './BotaoFiltros';
import BotaoNovaInfracao from './BotaoNovaInfracao';
import Infracao from './Infracao';

export default function Home() {
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(res => { setWarnings(res.data) });
  }, []);

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
        warnings.map(warning => <Infracao key={warning.id} data={warning}/>)
      }
    </div>
  );
}
