import React, { useEffect, useState } from "react";
import {Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import * as d3 from "d3";
import {csv} from 'd3'




function BarChart (){
 const [data ,setData]=useState([]);

    useEffect(()=>{
  csv('data.csv').then(data =>{

    setData(data)
  })
    }, []);

return (

<div>
<Bar
    



 height={400}
 width = {600}
 />
    
</div>






)







}

export default BarChart;