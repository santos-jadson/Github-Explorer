import React, { useEffect, useState } from 'react';
import Container from '../../components/Container'
import {Wrapper} from './styles'
import { Link, useLocation, useNavigate  } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import User from '../../models/user';
import { getUserByName } from '../../services/UserService';
import Response from '../../interfaces/response';
import TabCard from './components/TabCard';

interface RouteProps{
  tabIndex: number 
}

function UserDetails() {
    const [user, setUser] = useState<User | null>()

    const params = useLocation()
    const routeProp = params.state as RouteProps
    const navigate = useNavigate();

    useEffect(() => {
      let formattedPathname = params.pathname.substring(1)
      getUserByName(formattedPathname).then((response: Response) => {
          if(response.status === 200) {
              setUser(response.data)
          }else{
            navigate('/', {replace: true});
          }
      })
    }, [])

    console.log(routeProp)

  return (
      <>
        {user && <Wrapper>
          <header>
          <img src={`${user.avatar_url}`} alt="Username" />
              <div>
                <strong>{user.login}</strong>
                <p>{user.bio}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{user.followers}</strong>
                <span>Seguidores</span>
              </li>
              <li>
                <strong>{user.following}</strong>
                <span>Seguindo</span>
              </li>
              <li>
                <strong>{user.public_repos}</strong>
                <span>Repositórios</span>
              </li>
            </ul>
        </Wrapper>}
        <Container>
      
          { user && <Tabs defaultIndex={!routeProp ? 0 : routeProp.tabIndex }>
            <TabList>
              <Tab>Repos</Tab>
              <Tab>Starred</Tab>
            </TabList>
            <TabPanel>
              <TabCard isStarred={false} user={user}/>
            </TabPanel>
            <TabPanel>
              <TabCard isStarred={true} user={user}/>
            </TabPanel>
            
          </Tabs>}
        </Container>
        
      </>
    );
}

export default UserDetails;
