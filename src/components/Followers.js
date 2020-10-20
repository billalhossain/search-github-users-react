import React, {Fragment, useContext} from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'

function Followers() {
    const { followers } = useContext(GitHubContext)
    return (
        <Wrapper>
            <h3>Followers</h3>
            
                {
                    followers.length ?
                        <div className="followers-list">
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
                        </div>
                        : <p>No data found</p>
                }
        </Wrapper> 
    )
}
const Wrapper = styled.section`
    padding: 10px 20px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
    .followers-list{
        overflow: hidden;
        overflow-y: scroll;
        max-height: 290px;
        
    }
    .followers-list::-webkit-scrollbar {
        width: 5px;
    }
    .followers-list::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
        
    .followers-list::-webkit-scrollbar-thumb {
        background: #ddd; 
    }
    h3{
        font-size: 20px;
    }
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
