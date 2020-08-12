import React from "react";
import {PageTemplate} from "../components";
import ContactMap from "../contactMap/ContactMap";
import {Map} from "../admin/Dashboard/components/map";
const ContactDetail = () => <PageTemplate> <section className="signup">
    <br/><br/><br/>
    <div className="page-title-wrap">
        <div className="container">
            <h2 className="pull-left">
                <i className="fas fa-map-marker-alt"></i> 매장정보 </h2>
            <ul className="breadcrumb pull-right hidden-xs">
                <li><a href="/">Home</a></li>
                <li className="active">매장정보</li>
            </ul>
            <div className="clearfix"></div>
        </div>
    </div>

    <div className="basic-body sub-basic-body">
        <div className="container">
            <div className="row">
                <section className="basic-body-main col-md-12">

                    <div className="sub-page page-contact">
                        <div className="contact-top">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="contact-img"><p className="stitle">신촌 본점</p><img
                                            src="https://thebreadblue.com/theme/eb4_shop_005/page/img/contactus/1.png"
                                            alt="building" className="img-responsive"/></div>
                                    </div>
                                    <div className="col-sm-7">
                                        <ul className="list-unstyled">
                                            <li><span>· 주소</span> 서울 마포구 신촌로12다길 3, 1층</li>
                                            <li><span>· 전화번호</span> 070-4405-0723</li>
                                        </ul>
                                        <div className="map-box">


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>







                </section>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>

</section></PageTemplate>
export default ContactDetail