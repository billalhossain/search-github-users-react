import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Followers from './Followers'
import Info from './Info'
import Languages from './Languages'
import User from './User'
import LatestRepos from './LatestRepos'
import {GitHubContext} from '../Context/ContextProvider'

function UserState() {
    const { githubUser } = useContext(GitHubContext)
    return githubUser.id ? (
        <Container>
            <Info />
            <Row>
                <Col sm={12} md={8}>
                    <User />
                    <LatestRepos />
                </Col>
                <Col sm={12} md={4}>
                    <Followers />
                    <Languages/>
                </Col>
            </Row>
        </Container>
    ): null
}

export default UserState
