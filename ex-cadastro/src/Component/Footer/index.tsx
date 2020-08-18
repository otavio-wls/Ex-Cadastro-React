import React from 'react';
import { CssBaseline } from '@material-ui/core';

import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import './style.css';

export default function Footer() {
  return(
    <div className='footer'>
      <CssBaseline />
      <h2>Clinica 10</h2>
      <p>Rua São José, 56, Centro - SP</p>
      <div className='redesSociais'>
        <a href='https://pt-br.facebook.com/'><p><Facebook/></p></a>
        <a href='http://instagram.com/'><p><Instagram/></p></a>
        <a href='https://twitter.com/login?lang=pt'><p><Twitter/></p></a>
      </div>
    </div>
  );
}