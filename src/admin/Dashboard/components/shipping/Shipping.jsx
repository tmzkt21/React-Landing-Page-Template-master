import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Button,
    Card, CardActions,
    CardHeader,
    Divider
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ShippingTypes = {REQUEST: 'Chart/REQUEST'}
const ShippingRequest = action => ({type: ShippingTypes.REQUEST, payload: action.payload})
const ShippingReducer = ( state, action ) => {
    switch (action.type) {
        case ShippingTypes.REQUEST: return {...state, payload: action.payload}
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
export const Shipping = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={useStyles} style={{ position: 'relative',bottom:'0%',width :'100%', height :'100%',left:'0%'}}>
                <CardHeader title="배송관리"/>
                <Divider />
                <table style={{width : '100%', height : '60%'}}>
                    <th>주문일</th>
                    <th>주문자명</th>
                    <th>주문상태</th>
                    <tr>
                        <th>
                            <div>2020-05-2 14:25</div>
                        </th>
                        <th>홍길동</th>
                        <th>
                            <select >
                                <option selected>-- 상태 --</option>
                                <option>주문접수</option>
                                <option>결제완료</option>
                                <option>배송준비중</option>
                                <option>취소요청</option>
                                <option>교환요청</option>
                                <option>반품요청</option>
                            </select>
                        </th>
                    </tr>
                    <br/>
                    <tr>
                        <th>
                            <div>2020-05-4 09:30</div>
                        </th>
                        <th>김유신</th>
                        <th>
                            <select >
                                <option selected>-- 상태 --</option>
                                <option>주문접수</option>
                                <option>결제완료</option>
                                <option>배송준비중</option>
                                <option>취소요청</option>
                                <option>교환요청</option>
                                <option>반품요청</option>
                            </select>
                        </th>
                    </tr>
                    <br/>
                    <tr>
                        <th>
                            <div>2020-06-22 15:32</div>
                        </th>
                        <th>신사임당</th>
                        <th>
                            <select >
                                <option selected>-- 상태 --</option>
                                <option>주문접수</option>
                                <option>결제완료</option>
                                <option>배송준비중</option>
                                <option>취소요청</option>
                                <option>교환요청</option>
                                <option>반품요청</option>
                            </select>
                        </th>
                    </tr>
                    <br/>
                    <tr>
                        <th>
                            <div>2020-07-21 11:12</div>
                        </th>
                        <th>이순신</th>
                        <th>
                            <select >
                                <option selected>-- 상태 --</option>
                                <option>주문접수</option>
                                <option>결제완료</option>
                                <option>배송준비중</option>
                                <option>취소요청</option>
                                <option>교환요청</option>
                                <option>반품요청</option>
                            </select>
                        </th>
                    </tr>
                    <br/>
                    <tr>
                        <th>
                            <div>2020-08-18 22:12</div>
                        </th>
                        <th>이승규</th>
                        <th>
                            <select >
                                <option selected>-- 상태 --</option>
                                <option>주문접수</option>
                                <option>결제완료</option>
                                <option>배송준비중</option>
                                <option>취소요청</option>
                                <option>교환요청</option>
                                <option>반품요청</option>
                            </select>
                        </th>
                    </tr>
                    {/*<a className="btn btn-default">글쓰기</a>*/}

                </table>
                <CardActions className={classes.actions}>
                    <Button
                        color="primary"
                        size="small"
                        variant="text"
                        href="/shipping"
                    >
                        전체보기<ArrowRightIcon/>
                    </Button>
                </CardActions>
            </Card>
        </div>);
};



export default ShippingReducer;
