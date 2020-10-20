import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import mocUser from './githubUserData/mocUser'
import mocFollowers from './githubUserData/mocFollowers'
import { useAuth0 } from "@auth0/auth0-react";
const GitHubContext = React.createContext()


function ContextProvider({children}) {
    const [githubUser, setGithubUser] = useState(mocUser)
    const [followers, setFollowers] = useState(mocFollowers)
    const [reposLanguages, setReposLanguages] = useState([])
    const [latestRepos, setLatestRepos] = useState([])
    const [errorMsg, setErrorMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth0();

    // SEARCH GITHUB USER   
    const searchGithubUser = (user) => {
        setIsLoading(true);
        setReposLanguages([])
        axios.get(`https://api.github.com/users/${user}`)
        .then( res => {

            //SET GITHUB USER BASIC INFO
            setGithubUser(res.data)
            setErrorMsg(null)

            //SET USER FOLLOWERS LIST
            const followers = res.data.followers_url
            axios.get(followers)
            .then( res => {
                setFollowers(res.data)
            })

            //SET USER REPOSITORY DATA
            const repos = res.data.repos_url
            axios.get(repos)
            .then( res => {
                
                res.data.map( language => {
                    return language.language && setReposLanguages( prevState => (
                        [...prevState, language.language]
                    ))
                })

            })
            axios.get(res.data.repos_url + `?sort='created:asc'`)
            .then( res => {
                setLatestRepos(res.data)
            })
            setIsLoading(false);

        })
        .catch( error => {
            setErrorMsg(error.message)
        })
    }

    useEffect(() => {
        if(user && user.sub.includes("github")){
            const userApiUrl  = 'https://api.github.com/users/'+ user.nickname
            axios.get(userApiUrl)
            .then( res => {
                searchGithubUser(user.nickname)
            })
        }
    }, [user])
    

    return (
        <div>
            <GitHubContext.Provider value={{
                githubUser, 
                followers, 
                searchGithubUser,
                reposLanguages,
                errorMsg,
                user,
                isLoading,
                latestRepos,
            }}>
                {children}
            </GitHubContext.Provider>
        </div>
    )
}

export {GitHubContext, ContextProvider}
