import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {MainHeader, PageTemplate} from "../home";
import '../assets/bread.css'
import '../breadOrder/Order'





export const Bread01 = () =>
     <PageTemplate> <section className="Bread01">
          <>

        <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="" className="">
            <div grid-col="4" grid-pad="1.5"><h1>01</h1></div>
            <div grid-col="8" grid-pad="1.5"><h1>Fig Campagne</h1></div>
            <div grid-col="8" grid-pad="1.5"><h1>무화과 깜빠뉴</h1></div>
        </div>
        <br/>
        <br/><br/>

        <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
            <div grid-col="x10" grid-pad="1.5">
                <blockquote><i>톡톡 씹히는 무화과가 매력적인 무화과 깜빠뉴<br/>
                                <br/>판매가격	7,900원<br/></i></blockquote>
<div className="col-sm-6 sm-margin-bottom-30">
                <div className="shop-product-img">

                    <div className="fotorama--hidden"></div>
                    <div className="product-img-big fotorama fotorama1597054078051" data-nav="thumbs"
                         data-max-width="100%" data-loop="true" data-allowfullscreen="true">
                        <div
                            className="fotorama__wrap fotorama__wrap--css3 fotorama__wrap--slide fotorama__wrap--toggle-arrows fotorama__wrap--no-controls"
                            >
                            <div className="fotorama__stage" >
                                <div className="fotorama__fullscreen-icon" tabIndex="0" role="button"></div>
                                <div className="fotorama__stage__shaft"
                                    >
                                    <div
                                        className="fotorama__stage__frame fotorama__loaded fotorama__loaded--img fotorama__active"
                                        ><img
                                        src="https://thebreadblue.com/data/item/1585656636/thumb-66y07ZmU6rO86rmc67mg64m0_1000x1000.png"
                                        className="fotorama__img"
                                        /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

</div>
<div className="col-sm-6">
                <div grid-col="x10" grid-pad="1.5">


                    <h3 className="product-title">
                        <strong>무화과 깜빠뉴</strong>
                    </h3>
                    <p className="font-size-14 color-grey">톡톡 씹히는 무화과가 매력적인 무화과 깜빠뉴 </p>


                    <div className="shop-description-box">
                        <table className="table">
                            <tbody>
                            <tr>
                                <th scope="row">판매가격</th>
                                <td>
                                    <strong className="shop-product-prices">7,900원</strong>
                                    <input type="hidden" id="it_price" value="7900"/>
                                </td>
                            </tr>
                            <tr>
                                <th>배송비</th>
                                <td>
                                    3,500원(주문 시 결제, 오만원 이상 무료 배송)
                                </td>
                            </tr>

                            <div id="sit_sel_option">
                                <h3>선택된 옵션</h3>
                                <ul className="sit_opt_added">
                                    <li className="sit_opt_list">
                                        <input type="hidden" name="io_type[1585656636][]" value="0"/>
                                            <input type="hidden" name="io_id[1585656636][]" value=""/>
                                                <input type="hidden" name="io_value[1585656636][]" value="무화과 깜빠뉴"/>
                                                    <input type="hidden" className="io_price" value="0"/>
                                                        <input type="hidden" className="io_stock" value="99930"/>
                                                            <div className="opt_name">
                                                                <span className="sit_opt_subj">무화과 깜빠뉴</span>
                                                            </div>
                                                            <div className="opt_count">
                                                                <label htmlFor="ct_qty_1"
                                                                       className="sound_only">수량</label>
                                                                <button type="button" className="sit_qty_minus"><i
                                                                    className="fas fa-minus"
                                                                    aria-hidden="true"></i><span
                                                                    className="sound_only">감소</span></button>
                                                                <input type="text" name="ct_qty[1585656636][]" value="1"
                                                                       id="ct_qty_1" className="num_input" size="5"/>
                                                                    <button type="button" className="sit_qty_plus"><i
                                                                        className="fas fa-plus"
                                                                        aria-hidden="true"></i><span
                                                                        className="sound_only">증가</span></button>
                                                                    <span className="sit_opt_prc">+0원</span>
                                                            </div>
                                    </li>
                                </ul>
                                {/*<script>*/}
                                {/*    $(function() {*/}
                                {/*    price_calculate();*/}
                                {/*});*/}
                                {/*</script>*/}
                            </div>

                            </tbody>
                        </table>
                    </div>
                    <div id="sit_tot_price"><span>총 금액 </span><strong>7,900</strong> 원</div>


                    <div id="sit_ov_btn">
                        <button type="button" onClick="location.href='order" className="sit_btn_buy">
                                바로구매
                        </button>
                        <a href="order" rel="next_page">바로구매</a>
                        <button onclick="location.href='Order.js'" type="button">text</button>
                        <input type="button" value="확인" onClick="location.href='Order.js'"/>


                    </div>

                </div>

                    <img src={'https://thebreadblue.com/data/editor/2007/ce5e7872b2037bb54992c26397bf2350_1595490076_5124.png'}/> </div>

            </div>
        </div>





              <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
                  <div grid-col="4" grid-pad="1.5"></div>
                  <div grid-col="8" grid-pad="1.5" className=""><a href="breads" rel="next_page">prev ︎</a> &nbsp; &nbsp; &nbsp;&nbsp;
                      <a href="#" rel="next_page">Next ︎</a></div>
              </div>
    </>
    </section></PageTemplate>




export default Bread01