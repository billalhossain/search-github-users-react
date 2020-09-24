import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect } = useAuth0();
    return (
        <Wraper>
            <div>
                <h1>Find Github Users</h1>
                <button 
                    className="btn btn-lg btn-primary" 
                    onClick={ loginWithRedirect } 
                >
                    Login
                </button> 
            </div>
        </Wraper>
    )
}
const Wraper = styled.section `
    min-height: 100vh;
    display: grid;
    place-items: center;
    text-align: center;
    
`

export default Login
