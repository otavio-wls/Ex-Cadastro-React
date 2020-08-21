import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { CssBaseline, makeStyles, TableContainer, TableCell, Table, TableBody, TableRow, TableHead, Paper, Grid } from '@material-ui/core';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import {withRouter} from 'react-router-dom';


const useStyles = makeStyles((theme) =>({
  styleCliente:{
    marginLeft: '55px',
    marginTop: '30px',
    listStyle: 'none',
  },
  styleRow:{
    height: '55px',
  },
  divTable:{
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  table: {
    minWidth: 450,
  },
}));

function Clients() {
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
      <CssBaseline />
      <Header />      
      <h1 style={{marginTop: '150px', textAlign: 'center', marginBottom: '25px'}}>Lista de Clientes</h1>  
      <div className={classes.divTable}>      
      <Grid container component='main'>
        <Grid item xs={12}  sm={ 12 }  md={12}>
        <TableContainer style={{flexGrow: 0}} component={Paper}>
            <Table className={classes.table} size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow className={classes.styleRow}>
                  <TableCell align='left'>ID</TableCell>
                  <TableCell align='left'>NOME</TableCell>
                  <TableCell align='left'>CNPJ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients.map(client => (
                  <TableRow key={client.id} className={classes.styleRow}>
                    <TableCell align='left'>{client.id}</TableCell>
                    <TableCell align='left'>{client.name}</TableCell>
                    <TableCell align='left'>{client.cnpj}</TableCell>
                  </TableRow>
                ))} 
              </TableBody>            
            </Table>        
         </TableContainer>           
         </Grid>
      </Grid>
      </div>        
      <Footer />
    </div>
  );
}
export default withRouter(Clients);