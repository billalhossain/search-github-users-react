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
            <div className="container">
                <div className="content">
                    <h2>Search github user</h2>
                    <form onSubmit={loadUser}>
                        <InputGroup>
                            <FormControl
                                type="text"
                                value={user}
                                placeholder="Type github user name"
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
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: #fff;
    margin-bottom: 20px;
    .content{
        padding: 30px 0;
    }
    .error-msg{
        color: red;
        margin: 0;
    }
    h2{
        margin: 0;
        margin-bottom: 20px;
    }
    
`

export default SearchUser
