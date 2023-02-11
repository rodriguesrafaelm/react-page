import {Container, Title, Box, ProjectList} from './styled'
import {FaRegEnvelope, FaLinkedinIn} from 'react-icons/fa'
import React from 'react'
const Contato = () => {
    return (
      <Container>
        <Box>
        <Title>Email</Title>
        <ProjectList>
            <div>
                <FaRegEnvelope size={80}/>
                <span>rodriguesrafaelm@outlook.com</span>           
            </div>
        </ProjectList>
        </Box>
      </Container>
    );
  };
  
  export default Contato;