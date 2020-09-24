import React, { Fragment, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'

function Languages() {
    const { reposLanguages } = useContext(GitHubContext)
    const [languages, setLanguages] = useState([])
    const [total, setTotal] = useState('null')

    function uniqueLanguageValue(original) {
        var prev, array = [];

        original.sort();
        for ( var i = 0; i < original.length; i++ ) {
            if ( original[i] !== prev ) {

                let obj = {
                    label: original[i],
                    value: 1
                }
                array.push(obj)
                
            } else {
                array.map( item => {
                if(item.label === original[i]){
                    item.value++
                }
                })
            }
            prev = original[i];
        }
            
            var total = 0
            array.map( item => {
                total += item.value
            })
            setTotal( total )
    
        return array;         
    };

    useEffect( () => {
        if(reposLanguages.length){
            setLanguages(uniqueLanguageValue(reposLanguages))
        }
    },[reposLanguages])
    return reposLanguages.length ? (
        <Wrapper>
            <h3>Repos Languages</h3>
            <div className="language-chart">
                {
                    languages.map((item,i) => {
                        return (
                            <Fragment key={i}>
                                <div className="item" >
                                    <span>{item.label}</span>
                                    <span>{((item.value / total) * 100).toFixed(2) } %</span>
                                </div>
                            </Fragment>
                        )
                    })
                }
            </div>
        </Wrapper>
    ): <Wrapper><p>No data found</p></Wrapper> 
}
const Wrapper = styled.section`
    background: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;
    .language-chart{
        display: grid;
        grid-template-columns: auto auto;

    }
    h3{
        font-size: 20px;
        margin-bottom: 20px;
    }
    .item{
        margin-right: 10px;
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
        padding: 20px;
        border-radius: 5px;
        margin-bottom: 20px;
        box-shadow: 0 0 5px rgba(0,0,0,.1)
    }
`

export default Languages
