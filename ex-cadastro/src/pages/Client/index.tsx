import React from 'react';
import api from '../../api/api';
import Header from '../../Component/Header/index';

export default function Clients() {
  
  async function clients(){
  
    try{
      const client = localStorage.getItem('token');     
      const resposta = await api.get('/clients',{ headers: { Authorization: `Bearer ${client}` } })      
      console.log(resposta.data);
    } catch(error) {
      console.log(error);
    };          
  }       
    

  return(
    <div>  
      <Header />
      <h1>Lista de Clientes</h1>    
      <button onClick={clients}>Clique</button>
    </div>
  );
}