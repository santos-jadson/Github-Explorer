import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../../../../components/Card'
import BottomLoader from '../../../../components/BottomLoader'
import User from '../../../../models/user';
import { getUserByName } from '../../../../services/UserService';
import Response from '../../../../interfaces/response';
import { getRepoByUsername, getStarredByUsername } from '../../../../services/RepositoryService';
import Repository from '../../../../models/repository';
import { PER_PAGE_DEFAULT_VALUE } from '../../../../Utils/constants';
import { Button } from './styles';

interface TabProps{
    user: User 
    isStarred: boolean
}

function TabCard(props: TabProps) {
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [repos, setRepos] = useState<Repository[]>([])
    const [hasReachedMaxRepos, setHasReachedMaxRepos] = useState<boolean>(false)
    const [repoPage, setRepoPage] = useState<number>(1)

    useEffect(() => {
        findRepos(props.user)
    }, [])

    function findRepos(user: User) {
        setLoading(true)
        getRepoByUsername(user.login, PER_PAGE_DEFAULT_VALUE, repoPage, props.isStarred ).then((response: Response) => {
            if(response.status !== 200){
                setErrorMessage(response.message)
                setLoading(false)
                return
            }

            const data = repos.concat(response.data)

            setRepos(data)
            setRepoPage(repoPage+1)

            if(response.data.length < PER_PAGE_DEFAULT_VALUE){
                setHasReachedMaxRepos(true)
            }

            setLoading(false)
        })
    }

  return (
        <>
        {repos.map((repo: Repository) => 
        <Card key={repo.id}>
            <a href={repo.html_url} target="_blank">
            <div>
            <strong>{repo.name}</strong>
            <p>{repo.description}</p>
            </div>
            <ul>
                <li>
                <strong>{repo.watchers}</strong>
                <span>Stars</span>
                </li>
                <li>
                <strong>{repo.forks}</strong>
                <span>Forks</span>
                </li>
                <li>
                <strong>{repo.open_issues}</strong>
                <span>Issues</span>
                </li>
            </ul>
            </a>
        </Card>)}
        {loading && <BottomLoader />}
        {!hasReachedMaxRepos && !errorMessage && <Button onClick={() => props.user && findRepos(props.user)}>Carregar Mais</Button>}
        </>
    );
}

export default TabCard;
