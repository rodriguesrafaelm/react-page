import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0px 40px;
  background-color: #242424;
  color: #fff;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    display: none;
  }
`;


export const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px;
  gap: 10px;
  display: flex;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  padding: 20px 50px;
  border-radius: 12px;
  transition: all 0.3s;
  font-size: 20px;
  background: #202020;
  div {
    position: relative;
    display: none;
    align-items: center;
    justify-content: center;
    span {
      position: absolute;
      top: 40px;
      font-size: 80px;
    }  
  }
  &:hover {
    cursor: pointer;
    background: #ee5801;
    div {
      display: flex;
      background: #ee5801;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    padding: 10px;
    &:hover {
      div{
        display: none;
      }
    }
  }
`;