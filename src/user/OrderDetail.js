import {PageTemplate} from "../home";
import React from "react";
import styled from "styled-components";
import { Pagination } from "semantic-ui-react";

const OrderDetailTypes= {REQUEST: 'OrderDetail/REQUEST', SUCCESS: 'OrderDetail/SUCCESS', FAIL: 'OrderDetail/FAIL'}
const OrderDetailRequest = action => ({types: OrderDetailTypes.REQUEST, payload: action.payload})
const OrderDetailSuccess = action => ({types: OrderDetailTypes.SUCCESS, payload: action.payload})
const OrderDetailFail = action => ({types: OrderDetailTypes.FAIL, payload: action.payload})

const OrderDetailReducer = (state, action) => {
    switch (action.type) {
        case OrderDetailTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case OrderDetailTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case OrderDetailTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

const BuyListTable = styled.table`
    width: 100%; 
    tbody {
        text-align: center; 
        tr {
            border-bottom: 1px solid #ccc;
            td {
                padding: 10px;
            }
        }
    }
`;

const PageDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    div {
        min-height: 0 !important;
        box-shadow: none !important;
        a{
            padding: 5px 7px !important;
            min-width: 0 !important;
        }
    }
`;

export const OrderDetail = () => {
    return <>


        <center>
            <article>
                <BuyListTable>
                    <thead>
                    <tr>
                        <th scope="col">num 주문번호</th>
                        <th scope="col">Name(option) 상품이름</th>
                        <th scope="col">Price 가격</th>
                        <th scope="col">Quantity 수량</th>
                        <th scope="col">shippingStatus 배송현황</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </BuyListTable>

                <PageDiv>
                    <Pagination

                    />
                </PageDiv>
            </article>
        </center>
    </>
}


export default OrderDetail