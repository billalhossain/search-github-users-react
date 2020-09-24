import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Error() {
    return (
        <Wraper>
            <div>
                <h1>404 Error</h1>
                <h2>Your request page was not found</h2>
                <Link to="/" className="btn btn-primary">Back to Page</Link>
            </div>
        </Wraper>
    )
}
const Wraper = styled.section `
    min-height: 100vh;
    display: grid;
    place-items: center;
    text-align: center;
    h1{
        font-weight: bold;
    }
    h2{
        margin-bottom: 20px;
    }
`

export default Error
