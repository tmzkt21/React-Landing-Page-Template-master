import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card, CardActions,
  CardHeader,
  Divider
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ProductRegistrationTypes = {REQUEST: 'MemberManagement/REQUEST'}
const ProductRegistrationRequest = action => ({type: ProductRegistrationTypes.REQUEST, payload: action.payload})
const ProductRegistrationReducer = ( state, action ) => {
  switch (action.type) {
    case ProductRegistrationTypes.REQUEST: return {...state, payload: action.payload}
    default: return state
  }
}


const useStyles = makeStyles(() => ({
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
export const ProductRegistration = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={useStyles} style={{ position: 'relative',bottom:'0%',width :'100%', height :'80%',left:'0%'}}>
        <CardHeader title="상품등록"/>
        <Divider />
        <table style={{width : '100%', height : '50%'}}>
          <tr>
            <th>상품명</th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>판매가</th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>이미지등록</th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>상품설명</th>
            <th><input type="text"/></th>
          </tr>
        </table>
        <CardActions className={classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="text"
            href="/productRegistration"
          >
            전체보기<ArrowRightIcon/>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};



export default ProductRegistration;
