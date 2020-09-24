import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LanguageChart from '../Charts/LanguageChart'
import Followers from './Followers'
import Info from './Info'
import Languages from './Languages'
import SearchUser from './SearchUser'
import Navbar from './Navbar'
import User from './User'

function UserState() {
    return (
        <Container>
            <Info />
            <Row>
                <Col sm={12} md={6}>
                    <User/>
                </Col>
                <Col sm={12} md={6}>
                    <Followers />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <Languages/>
                </Col>
                <Col sm={12} md={6}>
                    {/* <LanguageChart /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default UserState
