import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Menu,
  MenuItem ,
  Checkbox,
  FormGroup,
  FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChartBar from "./ChartBar";
import ChartDoughnut from "./ChartDoughnut";
import ChartPolar from "./ChartPolar";

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




export const Chart = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [chartType, setChartType] = useState("차트종류")
  // CheckBox
  const [checked, setChecked] = useState({
    checkBox_Age: false,
    checkBox_Sex: false,
    checkBox_Location: false,
    checkBox_days: false,
    checkBox_E: false,
    checkBox_ChartData: ""
  })
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [chartValue, setChartValue] = useState("판매량/방문자 통계")
  return (
      <Card
          {...rest}
          className={clsx(classes.root, className)}
      >
        <CardHeader
            action={
              <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="small" variant="text" >

                  {chartType}

                  <ArrowDropDownIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                  <MenuItem onClick={()=> {setAnchorEl(null); setChartType("바형")}}>바형</MenuItem>
                  <MenuItem onClick={()=> {setAnchorEl(null); setChartType("원형")}}>원형</MenuItem>
                  <MenuItem onClick={()=> {setAnchorEl(null); setChartType("폴라형")}}>폴라형</MenuItem>
                </Menu>
              </div>}
            title="판매량/방문자비교"
        />
        <CardActions>
          <FormGroup
              row>
          </FormGroup>
        </CardActions>
        <Divider />
        <CardContent>
          {chartType === "폴라형" ?
              <ChartPolar
                  chartValue = {chartValue}/>
              : chartType === "원형"
                  ? <ChartDoughnut
                      chartValue={chartValue}/>:
                  <ChartBar
                      chartValue={chartValue}/>}
        </CardContent>
      </Card>
  );
};


export default ChartReducer;
