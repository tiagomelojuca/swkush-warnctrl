"use client";

import { useState, useEffect } from 'react';

import Image from 'next/image'

import api from './api';

import BotaoFiltros from './BotaoFiltros';
import BotaoNovaInfracao from './BotaoNovaInfracao';
import Infracao from './Infracao';

import FilterModal from './FilterModal';
import NewWarningModal from './NewWarningModal';

export default function Home() {
  const [warnings, setWarnings] = useState([]);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [newWarningModalIsOpen, setNewWarningModalIsOpen] = useState(false);

  useEffect(() => {
    api.get('/')
      .then(res => { setWarnings(res.data) });
  }, []);

  function handleDeleteWarning(id: number) {
    api.delete(`/${id}`)
      .then(res => { setWarnings(warnings.filter(warning => warning.id !== id)) })
  }

  return (
    <div className='main-wrapper flex flex-col items-center justify-center'>

      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Summoners Kush"
      />

      <div className="menu">
        <BotaoFiltros handleClick={() => setFilterModalIsOpen(true)}/>
        <BotaoNovaInfracao handleClick={() => setNewWarningModalIsOpen(true)}/>
      </div>

      {
        warnings.map(warning => <Infracao key={warning.id} data={warning} handleClick={handleDeleteWarning}/>)
      }

      <FilterModal isOpen={filterModalIsOpen} onRequestClose={() => setFilterModalIsOpen(false)}/>
      <NewWarningModal isOpen={newWarningModalIsOpen} onRequestClose={() => setNewWarningModalIsOpen(false)}/>
    </div>
  );
}
