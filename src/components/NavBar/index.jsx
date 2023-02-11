import {NavContainer, NavLinks, NavLink} from './styled'
import { FaGithubAlt, FaHome, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <NavContainer>
        <NavLinks>
          <NavLink to={'/react-page/'}>
            Inicio
            <div><span><FaHome/></span></div>
            </NavLink>
          <NavLink to="/react-page/projetos">
            Projetos
            <div><span><FaGithubAlt/></span></div>
          </NavLink>
          <NavLink to={'/react-page/contato'}>
            +Contato
            <div><span><FaMailBulk/></span></div>
          </NavLink>
        </NavLinks>
      </NavContainer>
    );
  };
  
  export default Navbar;