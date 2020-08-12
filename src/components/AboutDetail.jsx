import React, { Component } from 'react'
import Navigation from "./Navigation";

export class AboutDetail extends Component {
  render() {
    return (
        <div id="about">
          <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/aboutDetail.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  <span>건강하고 맛있는 빵은 좋은 재료에서부터 시작됩니다.</span><br/>
                  더브레드블루는 믿고 먹을 수 있는 안전한 먹거리만을 제공한다는 신념으로 제조과정에서 일체의 화학 식품 첨가물을 넣지 않으며<br/>
                  쌀눈유, 두유, 콩 단백질 등의 건강한 식물성 재료만을 사용합니다. <br/>
                  특히 프랑스산 밀가루(T-55)와 국산 쌀가루 그리고 우리밀과 같이 까다롭게 엄선된 최고급 재료만을 사용하여 만든 우리 빵에서 깊은 맛과 풍미를 느껴보세요.<br/>
                  <br/>
                  <span>더브레드블루만의 노하우로 탄생한 천연발효종 빵을 만나보세요.</span><br/>
                  천연발효종이란 인공 이스트가 아닌 자연에서 배양한 발효종을 오랜 시간 발효 시켜 얻어지는 천연 효모를 의미하는데<br/>
                  더브레드블루에서는 자사 노하우로 직접 배양한 천연발효종을 사용하여 건강하고 맛있는 빵을 매일 정성스레 구워 냅니다.<br/>
                  이렇게 만들어진 빵은 속이 편하고 소화가 잘되기 때문에 어린 아이와 어르신들이 드셔도 좋습니다. <br/>
                </p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <p>
                      <span>더브레드블루는 계란, 우유, 버터 등 동물성 재료를 전혀 사용하지 않고도 맛있는 빵을 만드는 비건 베이커리 입니다.</span><br/>
                      2017년 첫 시작으로 현재까지 저희는 식물성 재료만을 사용하여 건강하고 신선한 간식과 디저트를 제공하고 있습니다.<br/>

                      <br/>
                      누구나 일상 속의 달콤함을 누릴 자격이 있다는 신념에서 시작한 더브레드블루는<br/>
                      아토피나 알러지가 있는 아이들까지도 걱정이나 의심 없이 건강한 방법으로 자유롭게 일상의 달콤함을 느낄 수 있기를 바랍니다.<br/>

                      <br/>나와 내 가족이 먹는다는 생각으로 엄선한 재료로 매일 신선한 빵을 제공하고, <br/>
                      제품을 개발하고 연구할 때 깊이 생각하고 진심을 다 할 것을 약속 드립니다.<br/>

                      <br/>
                      더브레드블루가 드리는 일상 속의 작은 행복이 매일 이 세상을 조금 더 달콤하게 만들어 갈 수 있기를 희망합니다.<br/>
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <p>
                      The Bread Blue bakes the best-tasting bakery with No eggs, No milk, and No butter.<br/>
                      We provide the healthy snacks and desserts by using all-natural ingredients only.<br/>

                      <br/>
                      Please feel free to enjoy your guilt-free pleasure within us!<br/>
                      The Bread Blue is for everyone; Locals, Visitors, and those who are Vegan, as well as Allergic
                      Kids who are often unable to indulge.<br/>
                      <br/>
                      We select all ingredients responsibly, and make our bread, cakes, cookies, candies and
                      snacks based on dignity of every life.<br/>
                      We promise that everything we offer - from bread to love - is done with a great deal of care
                      and consideration on our customers.<br/>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutDetail
