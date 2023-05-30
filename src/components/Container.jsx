import React, { useState } from 'react'
import api from '../services/api'

import './Container.css'

import {FiSearch} from 'react-icons/fi'

const Container = () => {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({})

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value)
  }

  const  handleSearch = async() => {
    if(input === '') {
      alert('Preencha algum cep')
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
      
    } catch (error) {
      alert('Erro')
      setInput('')
      
    }


  }


  return (
    <div className='container'>
      <h1 className='title'>Zip code here </h1>
        <div className='containerInput'>
        <input type="text"
          name="" 
          id="" 
          placeholder='Search here'
          value={input}
          onChange={handleInput}/>
          <button className='buttonSearch' onClick={handleSearch}>
            <FiSearch size={25} color='#fff'/>
          </button>

        </div>


        {Object.keys(cep).length > 0  && (
          <main className='main'>
          <h2>Zip code: {cep.cep}</h2>
          <span>Street : {cep.logradouro}</span>
          <span>Neighborhood : {cep.bairro}</span>
          <span>State : {cep.uf} </span>

         </main>
        )}
         
      
    </div>
  )
}

export default Container