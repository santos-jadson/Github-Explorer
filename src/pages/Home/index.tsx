import React, { FormEvent, useState } from 'react';
import Container from '../../components/Container'
import Card from '../../components/Card'
import { Form, Title } from './styles';
import { Link } from 'react-router-dom'
import { getUserByName } from '../../services/UserService';
import User from '../../models/user'
import Loader from '../../components/Loader';
import Response from '../../interfaces/response';
import ErrorMessage from '../../components/Error';
import {MdErrorOutline} from 'react-icons/md'
import {RiGitRepositoryFill} from 'react-icons/ri'
import {AiTwotoneStar} from 'react-icons/ai'

function Home() {
    const [username, setUsername] = useState<string>("")
    const [user, setUser] = useState<User | null>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [tabIndex, setTabIndex] = useState<number>(0)

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        setLoading(true)
        event.preventDefault();

        getUserByName(username).then((response: Response) => {
            if(response.status === 200) {
                setUser(response.data)
                setError(false)
            }else{
                setError(true)
                setUser(null)
                setErrorMessage(response.message)
            }
            setLoading(false)
        });
    }

  return (
      <>
        <Container>
            <Title>Encontre os usuários do Github</Title>
            <Form onSubmit={(e)=> handleSubmit(e)}>
                <input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite o usuário"
                />
                <button type="submit">Pesquisar</button>
            </Form>
        </Container>

        {error && !loading && <ErrorMessage>
            <MdErrorOutline size={20} color={"#FFF"}/>
            <strong>{errorMessage}</strong>
        </ErrorMessage>}

        {user && 
        <Card>
            <Link to={`/${user.login}`} state={{tabIndex: tabIndex}}>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <strong>{user.login}</strong>
              <p>{user.bio}</p>
            </div>
            <RiGitRepositoryFill size={30} onClick={() => setTabIndex(1)} />
            <AiTwotoneStar size={30} onClick={() => setTabIndex(1)}/>
            </Link>
        </Card>}
        {loading && <Loader />}
      </>
    );
}

export default Home;
