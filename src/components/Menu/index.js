import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.css';
import Logo from '../../assets/logoflix.png';
import Button from '../Button'

function Menu() {
  return (
      <nav className="Menu">
          <Link to="/">
            <img className="Logo" src={Logo} alt="WDFLIX Logo" />
          </Link>
          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Video
          </Button>
      </nav>
  );
}

export default Menu;