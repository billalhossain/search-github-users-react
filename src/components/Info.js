import React, { useContext } from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'

function Info() {
    const { githubUser } = useContext(GitHubContext)
    const {public_repos, public_gists, followers, following} = githubUser
    return (
        <Wrapper>
            <Item>
                <span>{public_repos}</span>
                <label htmlFor="">Repos</label>
            </Item>

            <Item>
                <span>{following}</span>
                <label htmlFor="">following</label>
            </Item>

            <Item>
                <span>{followers}</span>
                <label htmlFor="">followers</label>
            </Item>

            <Item>
                <span>{public_gists}</span>
                <label htmlFor="">Gists</label>
            </Item>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    margin-bottom: 20px;

`
const Item = styled.div`
    background: #fff;
    padding: 5px 20px;
    border-radius: 5px;
    text-align: center;

    span{
        display: block;
        font-weight: bold;
        font-size: 22px;
    }
    label{
        font-weight: 600;
        text-transform: capitalize;
    }
`
export default Info
