import styled from 'styled-components';

export const StyledAside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 30%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  display: none;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

export const StyledButton = styled.button`
    margin-right: 25%;
    padding: 20px;
    background-color: #242424 ;
    color: white;
    display: none;
    @media (max-width: 767px) {
    display: flex;
  }

`;

export const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 40% 0 0 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    height: 100vh;
    width: 100vw;
    gap: 30px;
    li {
        padding: 5% 10%;
        background: #242424 ;
        width: 10%;
        display: flex;
        justify-content: center;
        border-radius: 9px;
    }
}
`;


