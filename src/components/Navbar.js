import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

function Navbar() {
    const {
        isLoading,
        error,
        logout,
        user,
        isAuthenticated,
    loginWithRedirect,
      } = useAuth0();

    return isAuthenticated ? (
        <Wrapper>
            <Container>
                <div className="navbar-items">
                    <div>
                        
                        {
                            user.picture && <img src={user.picture} alt=""/>
                        }
                        {
                            user.name && <strong>{user.name}</strong>
                        }
                    </div>
                    <div>
                        <button 
                            className="btn btn-danger" 
                            onClick={() => { logout({ returnTo: window.location.origin })}} 
                        >
                            logout
                        </button>
                    </div>
                </div>
            </Container>
        </Wrapper>
    ): <button className="btn" onClick={loginWithRedirect} >Login</button>
}

const Wrapper = styled.section `
    background: #fff;
    margin-bottom: 20px;
    .navbar-items{
        padding: 20px 30px;
        display: flex;
        justify-content: space-between;

    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    strong{
        margin: auto 10px;
        font-size: 18px;
        text-transform: uppercase;
    }
    .btn{
        text-transform: capitalize;
    }
`

export default Navbar
