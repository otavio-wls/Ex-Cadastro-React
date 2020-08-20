import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { makeStyles, TableContainer, TableCell, Table, TableBody, TableRow, TableHead, Paper } from '@material-ui/core';
import Header from '../../Component/Header/index';

const useStyles = makeStyles((theme) =>({
  styleCliente:{
    marginLeft: '55px',
    marginTop: '30px',
    listStyle: 'none',
  },
  divTable:{
    width: '75%',
    marginLeft: '10px',
  },
  table: {
    minWidth: 450,
  },
}));

export default function Clients() {
  const classes = useStyles();
  const [clients, setClients] = useState<Array<any>>([]);

  useEffect(() => {
    getClients();
  }, []);

  async function getClients(){
  
    try{
      const token = localStorage.getItem('token');     
      const resposta = await api.get('/clients',{ headers: { Authorization: `Bearer ${token}` } })      
      console.log(resposta.data);
      const client = resposta.data;
      setClients([...client]);
      console.log(client);
    } catch(error) {
      console.log(error);
    };              
  }          

  return(
    <div>  
      <Header />      
      <h1 style={{marginTop: '100px', marginLeft: '10px', marginBottom: '10px'}}>Lista de Clientes</h1>  
      <div className={classes.divTable}>      
      <TableContainer component={Paper}>
            <Table className={classes.table} size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left'>ID</TableCell>
                  <TableCell align='left'>NOME</TableCell>
                  <TableCell align='left'>CNPJ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients.map(client => (
                  <TableRow key={client.id}>
                    <TableCell align='left'>{client.id}</TableCell>
                    <TableCell align='left'>{client.name}</TableCell>
                    <TableCell align='left'>{client.cnpj}</TableCell>
                  </TableRow>
                ))} 
              </TableBody>            
            </Table>        
         </TableContainer>           
        </div>
    </div>
  );
}