import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import './style.css';

export default function Footer() {
  return(
    <div className='footer'>
      <CssBaseline />
      <h2>Clinica 10</h2>
      <p>Rua São José, 56, Centro - SP</p>
      <div className='redesSociais'>
        <Link to='https://pt-br.facebook.com/'><p><Facebook/></p></Link>
        <Link to='http://instagram.com/'><p><Instagram/></p></Link>
        <p><Twitter/></p>
      </div>
    </div>
  );
}