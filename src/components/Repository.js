import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'
function Repository() {
    const { reposLanguages } = useContext(GitHubContext)

    function compressArray(original) {
 
        var compressed = [];
        // make a copy of the input array
        var copy = original.slice(0);
     
        // first loop goes over every element
        for (var i = 0; i < original.length; i++) {
     
            var myCount = 0;	
            // loop over every element in the copy and see if it's the same
            for (var w = 0; w < copy.length; w++) {
                if (original[i] == copy[w]) {
                    // increase amount of times duplicate is found
                    // myCount++;
                    console.log('matched');

                    // sets item to undefined
                    delete copy[w];
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
