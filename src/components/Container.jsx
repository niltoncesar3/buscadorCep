import React from 'react'

import './Container.css'

import {FiSearch} from 'react-icons/fi'

const Container = () => {
  return (
    <div className='container'>
      <h1 className='title'>Buscador CEP</h1>
        <div className='containerInput'>
        <input type="text"
          name="" 
          id="" 
          placeholder='Digite seu cep'/>
          <button className='buttonSearch'>
            <FiSearch size={25} color='#fff'/>
          </button>

        </div>
        
         <main className='main'>
          <h2>Cep: 15998745647</h2>
          <span>Rua : teste</span>
          <span>Complemento : Algum complemento</span>
          <span>Bairro : Vila maria</span>
          <span>Estado : </span>

         </main>
      
    </div>
  )
}

export default Container