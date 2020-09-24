import React, { Fragment, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {GitHubContext} from '../Context/ContextProvider'

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


function LanguageChart() {
    const { reposLanguages } = useContext(GitHubContext)
    const [languages, setLanguages] = useState([])
    const [total, setTotal] = useState('null')

    const chartConfigs = {
      type: "doughnut2d", 
      width: "200", 
      height: "400", 
      dataFormat: "json", 
      dataSource: {
        chart: {
          caption: "Language",
          theme: "fusion"
        },
        data: languages
      }
    };

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
          <ReactFC {...chartConfigs} />
      </Wrapper>
    ): <Wrapper><p>No data found</p></Wrapper> 
}
const Wrapper = styled.section`
    
`

export default LanguageChart
