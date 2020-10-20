import React, { Fragment, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'

function Languages() {
    const { reposLanguages } = useContext(GitHubContext)
    const [languages, setLanguages] = useState([])
    const [total, setTotal] = useState('null')
    console.log(reposLanguages);

    function uniqueLanguageValue(original) {
        
        const uniqueLanguages = original.reduce( (prevItem, currentItem) => {
            if( prevItem.some( item => item.label === currentItem) ){
                const currentObj = prevItem.filter( item => item.label === currentItem)[0]
                currentObj.value++
            }else{
                let obj = {
                    label: currentItem,
                    value: 1
                }
                prevItem.push(obj)
            }
            return prevItem
        },[])

        const total = uniqueLanguages.reduce( (prev, currentItem) => {
            return prev + currentItem.value
        }, 0)
        setTotal( total )

        return uniqueLanguages         
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
