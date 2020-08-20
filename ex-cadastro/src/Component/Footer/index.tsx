import './style.css';
import React from 'react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return(
    <footer className='footer'>
      <div className='footer__social'>
        <p>
          <FaYoutube size="40" />
        </p>
        <p>
          <FaInstagram size="40" />
        </p>
      </div>
      <p className='footer__copyright'>Meu Copyright</p>
    </footer>

  );
}