import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Followers from './Followers'
import Info from './Info'
import Languages from './Languages'
import User from './User'
import LatestRepos from './LatestRepos'
import {GitHubContext} from '../Context/ContextProvider'
import { useTranslation } from 'react-i18next'

function UserState() {
    const { githubUser } = useContext(GitHubContext)
    const {t} = useTranslation()
    return githubUser.id ? (
        <Container>
            <Info translation={t}/>
            <Row>
                <Col sm={12} md={8}>
                    <User translation={t}/>
                    <LatestRepos translation={t}/>
                </Col>
                <Col sm={12} md={4}>
                    <Followers translation={t}/>
                    <Languages translation={t}/>
                </Col>
            </Row>
        </Container>
    ): null
}

export default UserState
