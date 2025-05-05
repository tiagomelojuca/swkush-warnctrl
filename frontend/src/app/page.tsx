"use client";

import { useState, useEffect } from 'react';

import Image from 'next/image'

import api from './api';

import BotaoFiltros from './BotaoFiltros';
import BotaoNovaInfracao from './BotaoNovaInfracao';
import Infracao from './Infracao';

import ErroModal from './ErroModal';
import FilterModal from './FilterModal';
import NewWarningModal from './NewWarningModal';

import { Warning } from './Warning';
import { QueryOptions, QueryUrlAssembler } from './QueryUrlAssembler';

const queryUrlAssembler = new QueryUrlAssembler();

export default function Home() {
  const [warnings, setWarnings] = useState([]);
  const [filters, setFilters] = useState(null);

  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [newWarningModalIsOpen, setNewWarningModalIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);

  function queryWarnings(params: QueryOptions | null) {
    api.get(queryUrlAssembler.Execute('/', params))
      .then(res => { setWarnings(res.data.reverse()) });
  };

  useEffect(() => {
    queryWarnings(filters as QueryOptions | null);
  }, [filters]);

  function handleDeleteWarning(id: number) {
    api.delete(`/${id}`)
      .then(res => { setWarnings(warnings.filter(warning => warning.id !== id)) })
  }

  function handleInsertWarning(warning: Warning) {
    api.post('/', warning)
      .then(res => {
        queryWarnings(filters as QueryOptions | null);
      })
      .catch(err => {
        setErrorModalIsOpen(true);
      })
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

      <FilterModal
        isOpen={filterModalIsOpen}
        onRequestClose={() => setFilterModalIsOpen(false)}
        onSubmit={(params: QueryOptions) => setFilters(params as QueryOptions)}
      />

      <NewWarningModal
        isOpen={newWarningModalIsOpen}
        onRequestClose={() => setNewWarningModalIsOpen(false)}
        onSubmit={(warning: Warning) => handleInsertWarning(warning)}
      />

      <ErroModal
        isOpen={errorModalIsOpen}
        onRequestClose={() => setErrorModalIsOpen(false)}
      />
    </div>
  );
}
