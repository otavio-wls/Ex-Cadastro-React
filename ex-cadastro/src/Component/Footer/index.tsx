import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './style.css';

export default function Footer() {
  return(
    <div className='footer'>
      <CssBaseline />
      <h2>Clinica 10</h2>
      <p>Rua São José, 56, Centro - SP</p>
      <div className='redesSociais'>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </div>


  );
}