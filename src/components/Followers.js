import React, {Fragment, useContext} from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'

function Followers() {
    const { followers } = useContext(GitHubContext)
    return followers.length ? (
        <Wrapper>
            {
                followers.map( follower => {
                    return (
                        <article key={follower.id}>
                            <div className="img-section">
                                <img src={follower.avatar_url} alt={follower.login}/>
                            </div>
                            <div className="text">
                                <p className="name">{follower.login}</p>
                                <a href={follower.html_url} target="_blank">{follower.html_url}</a>
                            </div>
                        </article>
                    )
                })
            }
        </Wrapper> 
    ): <Wrapper><p>No data found</p></Wrapper> 
}
const Wrapper = styled.section`
    overflow-y: scroll;
    height: 260px;
    padding: 10px 20px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
article {
    display: grid;
    grid-template-columns: 50px auto;
    column-gap: 20px;
    padding: 10px;
    .img-section {
        height: 50px;
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
    }
    .followerId {
      color: var(--clr-grey-5);
    }
  }
`
export default Followers
