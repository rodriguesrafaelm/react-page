import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #ee5801;
  height: 50vh;
  font-size: 100%;
  h1 {@keyframes text-rgb {
    0% {
        color: rgb(0, 0, 0);
    }
    50% {
        color: rgb(255, 255, 255);
    }
    }
    
    animation: text-rgb 5s linear forwards;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    height: 60vh;
  }

`;