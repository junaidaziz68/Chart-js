import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2'
import *  as d3 from "d3";
import {csv} from "d3"




function BarChart (){
 const [data ,setData]=useState([]);
 
 const [loading , setLoading]= React.useState(true);
useEffect(()=>{
  d3.csv('/data.csv').then(data =>{
  
  setData(data)
  setLoading(false);
  })
    }, []);

return (

<div>
<Line data={data}
  height={400}
 width = {600}
 options ={options}
 
 />
     
</div>






)







}

export default BarChart;