import React from "react";
import {PageTemplate} from "../home";
import '../assets/category.css'

const SearchTypes= {REQUEST: 'Search/REQUEST', SUCCESS: 'Search/SUCCESS', FAIL: 'Search/FAIL'}
const SearchRequest = action => ({types: SearchTypes.REQUEST, payload: action.payload})
const SearchSuccess = action => ({types: SearchTypes.SUCCESS, payload: action.payload})
const SearchFail = action => ({types: SearchTypes.FAIL, payload: action.payload})

const SearchReducer = (state, action) => {
    switch (action.type) {
        case SearchTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case SearchTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case SearchTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const Search = () => <PageTemplate><section className="events">
    <div className="main">
        <div className="nav">
            <div className="nav-item">
                <h3 className="h3-bread"> 내게 맞는 빵 찾기 </h3>
                <br/>
                <br/>
                <div className="Bread">
                </div>
                <div className="chart1">
                    <p className="stitle">
                        TASTE FOR ALL
                    </p>

                    <p className="desc">
                        나에게 맞는 더브레드블루 제품을 찾아 볼까요?
                    </p>
                    <p className="stitle2">
                        구매 목적
                    </p>
                    <p className="title">
                        <img src="https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/check.png" className="check"/>
                    </p>

                    <p><ul id="chart1">
                        <li onClick="javascript:select1(this);"><input type="radio" name="chart1" value="식사대용"/><p>식사대용</p>
                            <div className="circle"></div></li>
                        <li onClick="javascript:select1(this);"><input type="radio" name="chart1" value="간식대용"/><p>간식대용</p>
                            <div className="circle"></div></li>
                        <li onClick="javascript:select1(this);" className="active"><input type="radio" name="chart1" value="다이어트"/>
                            <p>다이어트</p>
                            <div className="circle"></div></li>
                        <li onClick="javascript:select1(this);"><input type="radio" name="chart1" value="선물"/><p>선물</p>
                            <div className="circle"></div></li>
                    </ul></p>
                    <p className="stitle2" >
                        알러지 체크
                    </p>
                    <p className="title">
                        <img src="https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/check.png" className="check"/>
                    </p>
                    <ul id="chart2">
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="아몬드"/>
                            <div className="circle"></div>
                            <p>아몬드</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="호두"/>
                            <div className="circle"></div>
                            <p>호두</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="땅콩"/>
                            <div className="circle"></div>
                            <p>땅콩</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="피스타치오"/>
                            <div className="circle"></div>
                            <p>피스타치오</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="캐슈넛"/>
                            <div className="circle"></div>
                            <p>캐슈넛</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="마카마디아"/>
                            <div className="circle"></div>
                            <p>마카마디아</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="밀가루"/>
                            <div className="circle"></div>
                            <p>밀가루</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="콩(대두)"/>
                            <div className="circle"></div>
                            <p>콩(대두)</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="설탕"/>
                            <div className="circle"></div>
                            <p>설탕</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="토마토"/>
                            <div className="circle"></div>
                            <p>토마토</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="건포도"/>
                            <div className="circle"></div>
                            <p>건포도</p>
                        </li>
                        <li onClick="javascript:select2(this);" className="">
                            <input type="checkbox" name="chart2" value="복숭아"/>
                            <div className="circle"></div>
                            <p>복숭아</p>
                        </li>
                    </ul>
                    <div id="buttonArea">
                        <button type="button" onClick="javascript:init();;">초기화</button>
                        <button type="button" id="confirm" onClick="javascript:result();">결과보기</button>
                    </div>


                    <div id="result">

                        <p className="stitle2" >
                            고객님이 건강 할 수 있도록 <br className="mobile_br"/>이렇게 추천 합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></PageTemplate>



export default SearchReducer