import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LanguageChart from '../Charts/LanguageChart'
import Followers from './Followers'
import Info from './Info'
import Languages from './Languages'
import SearchUser from './SearchUser'
import Navbar from './Navbar'
import User from './User'
import LatestRepos from './LatestRepos'

function UserState() {
    return (
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
    )
}

export default UserState
