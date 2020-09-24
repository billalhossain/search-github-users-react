import React, { useContext, useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import {GitHubContext} from '../Context/ContextProvider'
import styled from 'styled-components'

function SearchUser() {
    const {searchGithubUser, errorMsg} = useContext(GitHubContext)
    const [user, setUser] = useState('')
    const loadUser = (e) =>{
        e.preventDefault()
        searchGithubUser(user)
    }
    return (
        <Wrapper>
            <form onSubmit={loadUser}>
                <InputGroup>
                    <FormControl
                         type="text"
                         value={user}
                         placeholder="Search github user name"
                         className="form-control"
                         onChange={ (e) => setUser(e.target.value)}
                    />
                    <InputGroup.Append>
                    <Button variant="btn btn-primary" type="submit">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                {
                    errorMsg && <p className="error-msg" >{errorMsg}</p>
                }
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    .error-msg{
        color: red;
        margin: 0;
    }
    
`

export default SearchUser
