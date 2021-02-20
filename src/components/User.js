import React, {Fragment, useContext} from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'

function User({translation}) {
    const { githubUser } = useContext(GitHubContext)
    const {
        name, 
        avatar_url,
        location,
        bio,
        login,
        id,
        company,
        html_url,
        created_at,

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
            </article>
            <p className="company">{company || null}</p>
            <p className="bio">{bio || null}</p>
            <p className="address">{location || null}</p>
            <p className="member-since">{translation('Member since')}: <Moment format='MMM YYYY'>{created_at}</Moment> </p>
        </Wrapper>
    ): <Wrapper><p>{translation('No data found')} </p></Wrapper> 
}
const Wrapper = styled.section`
    padding: 30px 20px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
    min-height: 260px;
    article {
        display: flex;
        grid-template-columns: 100px auto 15%;
        column-gap: 20px;
        margin-bottom: 18px;
        div{
            align-self: center; 
        }
        .img-section {
            border-radius: 50%;
            overflow: hidden;
            max-width: 120px;
            img{
                width: 100%;
            }
        }
        .name {
            text-transform: capitalize;
            font-weight: 600;
            font-size: 20px;
            }
            .followerId {
            color: var(--clr-grey-5);
            }
        }
        p{
            margin-bottom: 5px;
        }
        .company{
            margin-bottom: 10px;
        }
`
export default User
