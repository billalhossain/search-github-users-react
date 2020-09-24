import React, {useContext} from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { SearchUser, Repository, UserState, Navbar }  from '../components'
import {GitHubContext} from '../Context/ContextProvider'
function Dashboard() {
    const { isLoading, githubUser } = useContext(GitHubContext)
    var isObjectEmpty = !Object.keys(githubUser).length;

    if (isLoading) {
        return (
          <Wrapper>
            <Navbar />
            <Container>
                <SearchUser />
            </Container>
            <h1 className="loading">Loading...........</h1>
          </Wrapper>
        );
    }


    return  (
        <div>
            <Navbar />
            <Container >
                <SearchUser />
            </Container>
            {
                !isObjectEmpty ? <UserState /> : null
            }
        </div>
    )
}
const Wrapper = styled.section`
    .loading{
        text-align: center;
        margin-top: 30px;
    }
`
export default Dashboard
