import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card, CardActions,
  CardHeader,
  Divider
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from 'axios'
import {useHistory} from "react-router-dom";

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
// registrationName;
// registrationImage;
// registrationPrice;
// registrationDescription
export const ProductRegistration = () => {
  const [registrationName,setRegistrationName] = useState('')
  const [registrationPrice,setRegistrationPrice] = useState('')
  const [registrationImage,setRegistrationImage] = useState('')
  const [registrationDescription,setRegistrationDescription] = useState('')
  const history = useHistory();

  const onRegistratHandle = e => {
    e.preventDefault();
    const registratData = {
      registrationName : registrationName,
      registrationPrice : registrationPrice,
      registrationImage : registrationImage,
      registrationDescription : registrationDescription
    }
    axios.post(`http://localhost:8080/registration/add`, registratData)
        .then((res) => {
          alert("상품등록 성공!")
          history.push("/dashboard")
        })
        .catch( error => {
          alert("등록실패 재확인 해주세요")
          throw (error)
    })

  }

  const classes = useStyles();
  return (
    <div>
      <Card className={useStyles} style={{ position: 'relative',bottom:'0%',width :'100%', height :'80%',left:'0%'}}>
        <CardHeader title="상품등록"/>
        <Divider />
        <table border={"1"} style={{width : '100%', height : '50%'}}>
          <tr>
            <th>상품명</th>
            <th><input type="text" onChange={e => setRegistrationName(e.target.value)} /></th>
          </tr>
          <tr>
            <th>판매가</th>
            <th><input type="text" onChange={e => setRegistrationPrice(e.target.value)} /></th>
          </tr>
          <tr>
            <th>이미지등록</th>
            <th><input type="text" onChange={e => setRegistrationImage(e.target.value)} /></th>
          </tr>
          <tr>
            <th>상품설명</th>
            <th><input type="text" onChange={e => setRegistrationDescription(e.target.value)} /></th>
          </tr>
        </table>
        <input type="button" value={"상품등록"} onClick={onRegistratHandle}/>
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
