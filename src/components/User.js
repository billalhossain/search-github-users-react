import React, {Fragment, useContext} from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'

function User() {
    const { githubUser } = useContext(GitHubContext)
    const {
        name, 
        avatar_url,
        location,
        bio,
        login,
        id,
        company,
        html_url

    } = githubUser

    var isObjectEmpty = !Object.keys(githubUser).length;
    return  !isObjectEmpty ? (
        <Wrapper>
           <article key={id}>
                <div className="img-section">
                    <img src={avatar_url} alt={name}/>
                </div>
                <div className="text">
                    <p className="name">{name}</p>
                    <a href={html_url} target="_blank">@{login}</a>
                </div>
                <div><a href={html_url} className="btn btn-primary">Follow</a></div>
            </article>
            <p className="company">{company || null}</p>
            <p className="bio">{bio || null}</p>
            <p className="address">{location || null}</p>
        </Wrapper>
    ): <Wrapper><p>No data found </p></Wrapper> 
}
const Wrapper = styled.section`
    padding: 30px 20px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
    article {
        display: grid;
        grid-template-columns: 100px auto 15%;
        column-gap: 20px;
        margin-bottom: 18px;
        div{
            align-self: center; 
        }
        .img-section {
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .name {
            margin-bottom: 0;
            text-transform: capitalize;
            font-weight: 600;
            font-size: 20px;
            }
            .followerId {
            color: var(--clr-grey-5);
            }
        }
        p{
            margin-bottom: 0;
        }
        .company{
            margin-bottom: 10px;
        }
`
export default User
