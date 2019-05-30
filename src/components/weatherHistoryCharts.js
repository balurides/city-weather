import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, 
        // Tooltip, ResponsiveContainer } from 'recharts';


 const ChartDataFormate = (chartData) =>{
    // Transformation on immutable data
    var datalist= chartData.list.map((list) => {
      return{
                dt_txt:list.dt_txt,
                temp_min:list.main.temp_min,
                temp_max:list.main.temp_max
      };
    });
    
    datalist.map((data) => {
        return(
        <div key={data.dt_txt}>
            <span>{data.temp_min}</span>
        </div>
        );
    })
}



const WeatherHistoryChart = ({historyData}) =>{
    var HistoryList;
    // inprogress hisory data
    if (!(historyData === undefined || historyData.length === 0)){
        // history = <div>{historyData.cod}</div>
        if(historyData.cod === "200") {
            console.log(historyData);
            HistoryList = ChartDataFormate(historyData);

            
        } else {
            HistoryList= (<div>{historyData.cod}</div>);
        }
        
    } else {
        HistoryList= <div>loading </div>
    };
    
//   return(
//     //   {HistoryList}
//   )
   
}

export default WeatherHistoryChart;