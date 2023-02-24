import {Title, Box, ProjectList} from './styled'
import { Container } from '../../Styles/GlobalStyle'
import {FaGithubSquare} from 'react-icons/fa'
import React from 'react'
const Projetos = () => {
    return (
      <Container>
        <Box>
        <Title>Projetos</Title>
        <ProjectList>
            <div>
                <a target="_blank" href='https://github.com/rodriguesrafaelm'>
                <FaGithubSquare size={80}/>
                </a>
                <span>rodriguesrafaelm</span>           
            </div>
        </ProjectList>
        </Box>
        

      </Container>
    );
  };
  
  export default Projetos;