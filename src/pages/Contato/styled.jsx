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
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  gap: 50%;
  div {
    display: flex;
    flex-direction: column;
    padding: 15px 0 15px 0;
    font-size: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    span {
        display: none;
    }
    &:hover {
        span {
            display: block;
        }
    }
    
  }
`;





