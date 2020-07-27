import React from 'react';
import './Menu.css';
import Logo from '../../assets/logoflix.png';
import Button from '../Button'

function Menu() {
  return (
      <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt="WDFLIX Logo" />
          </a>
          <Button as="a" className="ButtonLink" href="/">
            Novo Video
          </Button>
      </nav>
  );
}

export default Menu;