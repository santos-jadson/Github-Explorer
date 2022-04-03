import React from 'react';
import Container from '../../components/Container'
import {Header} from './styles'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../../components/Card'

function UserDetails() {
  return (
      <>
        <Header>
          <header>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg" alt="Username" />
              <div>
                <strong>Jadson</strong>
                <p>dev tentando um processo aí</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>555</strong>
                <span>Starts</span>
              </li>
              <li>
                <strong>122</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>150</strong>
                <span>Issues abertas</span>
              </li>
            </ul>
        </Header>
        <Container>
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab>Repos</Tab>
              <Tab>Starred</Tab>
            </TabList>

            <TabPanel>
              <Card>
                <Link to="/">
                <div>
                  <strong>Jadson</strong>
                  <p>dev tentando um processo aí</p>
                </div>
                  <ul>
                    <li>
                      <strong>555</strong>
                      <span>Starts</span>
                    </li>
                    <li>
                      <strong>122</strong>
                      <span>Forks</span>
                    </li>
                    <li>
                      <strong>150</strong>
                      <span>Issues</span>
                    </li>
                  </ul>
                </Link>
              </Card>
            </TabPanel>
            <TabPanel>
            <Card>
                <Link to="/">
                <div>
                  <strong>Jadson</strong>
                  <p>dev tentando um processo aí</p>
                </div>
                  <ul>
                    <li>
                      <strong>555</strong>
                      <span>Starts</span>
                    </li>
                    <li>
                      <strong>122</strong>
                      <span>Forks</span>
                    </li>
                    <li>
                      <strong>150</strong>
                      <span>Issues</span>
                    </li>
                  </ul>
                </Link>
              </Card>
              <Card>
                <Link to="/">
                <div>
                  <strong>Jadson</strong>
                  <p>dev tentando um processo aí</p>
                </div>
                  <ul>
                    <li>
                      <strong>555</strong>
                      <span>Starts</span>
                    </li>
                    <li>
                      <strong>122</strong>
                      <span>Forks</span>
                    </li>
                    <li>
                      <strong>150</strong>
                      <span>Issues</span>
                    </li>
                  </ul>
                </Link>
              </Card>
            </TabPanel>
          </Tabs>
        </Container>
        
      </>
    );
}

export default UserDetails;
