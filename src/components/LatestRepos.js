import React, { useContext } from 'react'
import styled from 'styled-components';
import {GitHubContext} from '../Context/ContextProvider'

function LatestRepos() {
    const { latestRepos } = useContext(GitHubContext)
    return (
        <Wrapper >
            <h3>Latest Repos</h3>
            {
                latestRepos && latestRepos.map( (repo, index) => {
                    return index >= 4 ? null :
                        <div className="repo-content" key={index}>
                            <a href={repo.html_url} target="_blank" className='repo-name'>{repo.name}</a>
                            <div className="">
                                <span className="badge"> Starts: {repo.stargazers_count}</span>
                                <span className="badge"> Watchers: {repo.watchers_count}</span>
                            </div>
                            <p className="description">{repo.description ? repo.description : 'null'}</p>
                        </div>
                            
                })
            }
        </Wrapper>

    )
}

const Wrapper = styled.section`
    padding: 30px 20px;
    background: #fff;
    border-radius: 5px;
    p{
        margin-bottom: 0;
    }
    h3{
        margin-bottom: 20px;
        font-size: 20px;
    }
    .repo-content{
        margin-bottom: 20px;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, .12);
        border-radius: 5px;

    }
    .repo-name{
        text-transform: capitalize;
        margin-bottom: 10px;
        display: inline-block;
        font-size: 18px;
    }
    .badge{
        box-shadow: 0 0 5px rgba(0,0,0,.1);
        padding: 5px 10px;
        display: inline-block;
        border-right: 10px;
        margin-bottom: 10px;
    }
`

export default LatestRepos
