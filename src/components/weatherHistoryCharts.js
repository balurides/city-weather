import React from 'react';

const WeatherHistoryChart = historyData =>{
    var historyData1 = historyData.historyData;
    console.log(historyData1);

    // inprogress hisory data
    var history;
    if (!(historyData1 === undefined || historyData1.length === 0)){
        history = <div>{historyData1.cod}</div>
            // if(historyData1.cod === 200) {
            //     historyData1.map((list) =>{
            //         <div>
            //             {historyData1.list}
            //         </div>
            //     }
            // };
        
    } else {
        history= <div>fail </div>
    };
    return (history);
}

export default WeatherHistoryChart;