import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// Dounut Chart Data
const ChartSize = {
    height : '50px'
}

const chartData = {
    labels:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    datasets:[
        {
            label:'판매량',
            data:[65,60,80,81,55,54,43,32],
            backgroundColor:'rgba(120,29,29,0.3)',
            borderWidth:4,
            LineTension:0
        },
        {
            label:'방문자',
            data:[40,30,20,50,10,60,22,34],
            backgroundColor:'#FFE4C4'
        },
    ]
}


const ChartDoughnut = props => {
    const {chartValue} = props
    return (
        <div>
            <h2>{chartValue}</h2>
            <Doughnut
                className={ChartSize}
                data={chartData} />
        </div>
    );
}

export default ChartDoughnut