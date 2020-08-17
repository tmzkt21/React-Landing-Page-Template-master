import React, {useState} from "react";
import {Bar} from 'react-chartjs-2'


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
const ChartBar = props => {
    const {chartValue} = props
    const [dataType, setDataType] = useState(chartData)
    const switchCase = (param) =>{
        switch(param){
            case "Sales": return setDataType(chartData)
        }
    }
    switchCase(chartValue)
    return (
        <div>
            <h2>{chartValue}</h2>
            <Bar
                data={dataType}
            />
        </div>
    );
}

export default ChartBar