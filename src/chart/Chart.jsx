import React, { useEffect, useState } from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import { Button, Card, CardActions, CardHeader, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ChartTypes = {REQUEST: 'Chart/REQUEST'}
const ChartRequest = action => ({type: ChartTypes.REQUEST, payload: action.payload})
const ChartReducer = ( state, action ) => {
  switch (action.type) {
    case ChartTypes.REQUEST: return {...state, payload: action.payload}
    default: return state
  }
}



export const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));


export const Chart = () => {
  const [chartData,setChartData] =useState({})
  const classes = useStyles();



  const Chart = () => {

    setChartData({
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
    })
  }
  useEffect(()=>{
    Chart()
  },[])
  return(

      <div>
        <Card className={useStyles} style={{ position: 'relative',bottom:'0%',width :'80%', height :'80%'}}>
          <CardHeader title="판매량 통계/방문자통계"/>
          <Divider />
          <th>
            <select >
              <option selected>-- 종류 --</option>
              <option value={<Doughnut data={chartData}/>}>표1</option>
              <option>표2</option>
              <option>표3</option>
            </select>
          </th>
          <Bar data={chartData}
               width={'80%'}
               height={'40%'}
               options={{
                 responsive:true,
                 scales:{
                   yAxes:[{
                     ticks:{
                       beginAtZero:true,
                       fontSize:20,
                       min:0,
                       max:40,
                       stepSize:5,
                       width:'600px',
                       height:'1200px'
                     }
                   }]
                 }
               }}/>
          <CardActions className={classes.actions}>
            <Button
                color="primary"
                size="small"
                variant="text"
                href="/chart"
            >
              전체보기<ArrowRightIcon/>
            </Button>
          </CardActions>
          {/*<Doughnut data={chartData}/>*/}
          {/*<Polar data={chartData}/>*/}
        </Card>
      </div>
  )
};


export default ChartReducer;
