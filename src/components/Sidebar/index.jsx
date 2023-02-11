import React, { useState } from 'react';
import {
    FaArrowLeft, FaBars,
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
  import {StyledAside, StyledNav, StyledButton} from './styled';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
return (
    <>
      <StyledButton type="button" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={30} />
      </StyledButton>
      <StyledAside open={isOpen}>
        <StyledNav>
          <ul>
            <li>
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                <FaArrowLeft size={30} />
              </button>
            </li>
            <li>
                <Link to='/react-page/' onClick={() => setIsOpen(!isOpen)}>
                Inicio
                </Link>
              </li>
            <li>
                <Link to='/react-page/projetos' onClick={() => setIsOpen(!isOpen)}>
                    Projetos
                </Link>
            </li>
            <li>
                <Link to='/react-page/contato' onClick={() => setIsOpen(!isOpen)}>
                    Contato
                </Link>
            </li>
          </ul>
        </StyledNav>
      </StyledAside>
    </>
  );
}

export default Sidebar;
