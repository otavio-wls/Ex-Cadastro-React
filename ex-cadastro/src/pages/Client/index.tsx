import React, { useState } from 'react';
import api from '../../api/api';
import Header from '../../Component/Header/index';

export default function Clients() {
  const [client, setClient] = useState([]);

  async function clients(){
  
    try{
      const token = localStorage.getItem('token');     
      const resposta = await api.get('/clients',{ headers: { Authorization: `Bearer ${token}` } })      
      console.log(resposta.data);
      setClient(resposta.data);
    } catch(error) {
      console.log(error);
    };          
  }          

  return(
    <div>  
      <Header />
      <h1 style={{marginTop: '150px'}}>Lista de Clientes</h1>    
      <div>{client}</div>
      <button onClick={clients}>Clique</button>
    </div>
  );
}