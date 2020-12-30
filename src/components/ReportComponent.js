import React,{useState} from "react";
import {Bar, Pie} from "react-chartjs-2";
import {chartColors} from "./colors";


function Report(props){
  const year = [200102,200203,200405,200506,200607,200708,200809,200910,2001011,201112,201213,201314,201415,201516,201617,201718,201819,201920]
  var mapp = {};
  var ma = {};
  var dist = [];

  var a = 0;
  for(const x of year)
  {
    mapp[x] = a;
    a+=1;
  }
  
  a=0;
  for(const x of props.districts.districts)
  {
    
    ma[x.name] = a;
    dist[a] = x.name;
    a+=1;
  }
  // console.log(ma);
  // const maize = props.production.production.map(function myfunc(p){
  //   if(p.crop_name === "Maize")
  //   {
  //     return p.amount
  //   }
  //   else 
  //     return 0;
  // })
  var maize = new Array(18);
  
  var barley = new Array(18);
  
  var wheat = new Array(18);

  var buckwheat = new Array(18);
  
  var paddy = new Array(18);

  var prodind = new Array(77);

  for(var x=0 ;x<18; x++)
  {
    maize[x] = 0;
    barley[x] = 0;
    wheat[x] = 0;
    buckwheat[x] = 0;
    paddy[x] = 0;
  }

  for(x=0 ;x<77; x++)
  {
    prodind[x] = 0;
  }

  for(var p of props.production.production){
 
    if(p.crop_name === "Maize")
    { 
      maize[mapp[p.year]] += p.amount;
    }
    if(p.crop_name === "Barley")
    { 
      barley[mapp[p.year]] += p.amount;
    }
    if(p.crop_name === "Wheat")
    { 
      wheat[mapp[p.year]] += p.amount;
    }
    if(p.crop_name === "Buckwheat")
    { 
      buckwheat[mapp[p.year]] += p.amount;
    }
    if(p.crop_name === "Paddy")
    { 
      paddy[mapp[p.year]] += p.amount;
    }
    prodind[ma[p.district_name]]+=p.amount;
  }
  


  const [data,setData] = useState({
    labels:year.map(y => y),
    datasets: [
      {
        label: "Maize",
        backgroundColor: "rgba(255,0,0,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: maize
      },
      {
        label: "Barley",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,100,200,0.2)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: barley
      },
      {
        label: "Wheat",
        backgroundColor: "rgba(0,255,255,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,100,200,0.2)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: wheat
      },
      {
        label: "Buckwheat",
        backgroundColor: "rgba(155,0,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,100,200,0.2)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: buckwheat
      },
      {
        label: "Paddy",
        backgroundColor: "rgba(255,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,100,200,0.2)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: paddy
      }
    ]
  })
  const options = {
    
    // responsive: true,
    legend: {
      display: false
    },
    type: "bar",
    maintainAspectRatio: false ,
    responsive: false,
    //   scales: {
    //     xAxes: [{
    //         stacked: true
    //     }],
    //     yAxes: [{
    //         stacked: true
    //     }]
    // },
    
    title:{
      display:true,
      text: "Bar Graph depicting the production of each crop in each year"
    },

  };

  const piedata = {
    // maintainAspectRatio: false,
    // responsive: false,
    labels: dist,
    datasets: [
      {
        data: prodind,
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };

  const pieOptions = {
    title:{
      display :true,
      text: "Crops production according to district"
    },
  }
  


  return (
    <React.Fragment>
    <Bar
        data={data}
        width={1000}
        height={500}
        options={options}
      />
    
      <Pie 
      data= {piedata}
      options= {pieOptions}
    />
    </React.Fragment>

  )
}

export default Report;