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

const MemberManagementTypes = {REQUEST: 'MemberManagement/REQUEST'}
const MemberManagementRequest = action => ({type: MemberManagementTypes.REQUEST, payload: action.payload})
const MemberManagementReducer = ( state, action ) => {
  switch (action.type) {
    case MemberManagementTypes.REQUEST: return {...state, payload: action.payload}
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
export const MemberManagement = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={useStyles} style={{ position: 'relative',bottom:'0%',width :'100%', height :'100%',left:'0%'}}>
        <CardHeader title="회원관리"/>
        <Divider />
        <table style={{width : '100%', height : '60%'}}>
          <th>선택</th>
          <th>이름/아이디</th>
          <th>메모</th>
          <th>관리</th>
          <tr>
            <input style={{width : '14px', height : '15px', margin:'23px'}} type="checkbox"/>
            <td>
              <tr>홍길동</tr>
              <tr>honggildong</tr>
            </td>
            <td>메모</td>
            <input type="button" value={"수정"} />
            <input type="button" value={"탈퇴"}  />
          </tr>
          <tr>
            <input style={{width : '14px', height : '15px', margin:'23px'}} type="checkbox"/>
            <td>
              <div>김유신</div>
              <div>kimyousin</div>
            </td>
            <td>메모</td>
            <input type="button" value={"수정"} />
            <input type="button" value={"탈퇴"}  />
          </tr>
          <tr>
            <input style={{width : '14px', height : '15px', margin:'23px'}} type="checkbox"/>
            <td>
              <div>신사임당</div>
              <div>sinsa</div>
            </td>
            <td>메모</td>
            <input type="button" value={"수정"} />
            <input type="button" value={"탈퇴"}  />
          </tr>
          <tr>
            <input style={{width : '14px', height : '15px', margin:'23px'}} type="checkbox"/>
            <td>
              <div>이순신</div>
              <div>sunsin</div>
            </td>
            <td>메모</td>
            <input type="button" value={"수정"}  />
            <input type="button" value={"탈퇴"}  />
          </tr>
          <tr>
            <input style={{width : '14px', height : '15px', margin:'23px'}} type="checkbox" />
            <td>
              <div>이승규</div>
              <div>lsg</div>
            </td>
            <td>메모</td>
            <input type="button" value={"수정"} />
            <input type="button" value={"탈퇴"}  />
          </tr>
          {/*<a className="btn btn-default">글쓰기</a>*/}

        </table>
        <CardActions className={classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="text"
            href="/memberManagement"
          >
            전체보기<ArrowRightIcon/>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};



export default MemberManagementReducer;
