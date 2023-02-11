import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #ee5801;
  height: 50vh;
  h3 {
    color: grey;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    height: 60vh;
  }
`;

export const Box = styled.div`
  background: #242424;
  border-radius: 10px;
  padding: 30px;
  height: 30vh;
  width: 400px;
  @media (max-width: 768px) {
   height: 40vh;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #777474;
  margin-bottom: 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ElementosLista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 12px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.2s;
  &:hover{
    transform: translate(0%, 15%) scale(1.2);
  }
`;

export const Elementos = styled.li`
  width: 33.33%;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  display: flex;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  font-size: 80px;
  
  &:hover {
    transform: scale(1.5) rotate(-5deg);
  }  
  
  @media (max-width: 768px) {
    padding-top: 10%;
    width: 33.33%;
    
  }


`;