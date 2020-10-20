import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'
function Repository() {
    const { reposLanguages } = useContext(GitHubContext)

    function compressArray(original) {
 
        var compressed = [];
        var copy = original.slice(0);
     
        for (var i = 0; i < original.length; i++) {
     
            var myCount = 0;	
            for (var i = 0; i < copy.length; i++) {
                if (original[i] == copy[i]) {
                    delete copy[i];
                }
            }
            console.log(myCount);
     
            if (myCount > 0) {
                var a = new Object();
                a.value = original[i];
                a.count = myCount;
                compressed.push(a);
            }
        }
     
        return compressed;
    };


    useEffect( () => {
        compressArray(reposLanguages)
    })
    return (
        <div>
            Repository
        </div>
    )
}

export default Repository
