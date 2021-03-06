import {PageTemplate} from "../components";
import React from "react";
import styled from "styled-components";
import { Pagination } from "semantic-ui-react";

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

const OrderDetail = () =>


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


export default OrderDetail