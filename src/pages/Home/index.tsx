import React from 'react';
import Container from '../../components/Container'
import Card from '../../components/Card'
import { Form, Title } from './styles';
import { Link } from 'react-router-dom'
import {FaChevronCircleRight} from 'react-icons/fa'

function Home() {
  return (
      <>
        <Container>
            <Title>Encontre os usuários do Github</Title>
            <Form onSubmit={() => {}}>
                <input
                onChange={(e) => {}}
                placeholder="Digite o usuário"
                />
                <button type="submit">Pesquisar</button>
            </Form>
        </Container>
        <Card>
            <Link to="/">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg" alt="Username" />
            <div>
              <strong>Jadson</strong>
              <p>dev tentando um processo aí</p>
            </div>
            <FaChevronCircleRight size={35} />
            </Link>
        </Card>
      </>
    );
}

export default Home;
