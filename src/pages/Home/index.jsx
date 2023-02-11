import {Container, Description, ElementosLista, Elementos, Title, Box} from './styled'
import {FaGithub, FaLinkedin, FaDiscord} from 'react-icons/fa'
import React from 'react'
const Home = () => {
    return (
      <Container>
        <Box>
        <Title>Olá, me chamo Rafael</Title>
        <Description>Sou um desenvolvedor web</Description>

        <ElementosLista>
          <Elementos>
          <a target="_blank" href='https://www.github.com/rodriguesrafaelm'>
            < FaGithub  />
          </a>
          </Elementos>
          <Elementos>
            <a target="_blank" href='https://www.linkedin.com/in/rafael-m-rodrigues/'>
              < FaLinkedin />
            </a>
          </Elementos>
          <Elementos>
            <a target="_blank" href='https://discord.com/users/252587915853430797'>
              <FaDiscord/>
            </a>
          </Elementos>
        </ElementosLista>
        </Box>
      </Container>
    );
  };
  
  export default Home;