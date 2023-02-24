import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 0 10% 0;
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