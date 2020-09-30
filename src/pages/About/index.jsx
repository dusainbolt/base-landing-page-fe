import { Row, Tabs } from "antd";
import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { CONTENT_ABOUT, IMG_SIDE_ABOUT } from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";
import IMG_DAU_TU_LIST from "../../common/image/dautudulich.png";

const { TabPane } = Tabs;

function About() {
  const { ABOUT_US, TAM_NHIN, CAM_KET, NHA_DAU_TU } = CONTENT_ABOUT;
  const slide = [];
  slide[1] = useRef(null);
  slide[2] = useRef(null);
  slide[3] = useRef(null);
  slide[4] = useRef(null);

  const onChangeTabs = activeKey => {
    if (slide[activeKey] && slide[activeKey].current)
      slide[activeKey].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div className="home about">
      <CarouselPage listImage={IMG_SIDE_ABOUT} className="home__carousel-page" />
      <Tabs onChange={onChangeTabs} defaultActiveKey="1">
        <TabPane tab="Về chúng tôi" key="1"></TabPane>
        <TabPane tab="Sứ mệnh" key="2"></TabPane>
        <TabPane tab="Cam kết" key="3"></TabPane>
        <TabPane tab="Nhà đầu tư" key="4"></TabPane>
      </Tabs>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <Row className="about__row">
            <div ref={slide[1]} className="about__row--content">
              <h3 className="about__row--content__title">VỀ CHÚNG TÔI</h3>
              <p>
                <b>{ABOUT_US[0]}</b>
              </p>
              <p>{ABOUT_US[1]}</p>
            </div>
          </Row>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <Row className="about__row bg">
            <div ref={slide[2]} className="about__row--content">
              <h3 className="about__row--content__title">SỨ MỆNH</h3>
              <p>
                <b>{TAM_NHIN[0]}</b>
              </p>
              <p>{TAM_NHIN[1]}</p>
            </div>
          </Row>
        </FadeIn>
      </LazyLoad>
      <Row className="about__row">
        <div ref={slide[3]} className="about__row--content">
          <h3 className="about__row--content__title">CAM KẾT</h3>
          <p>
            <b>{CAM_KET[0]}</b>
          </p>
          <p>{CAM_KET[1]}</p>
          <p>{CAM_KET[2]}</p>
        </div>
      </Row>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <Row className="about__row bg">
            <div ref={slide[4]} className="about__row--content">
              <h3 className="about__row--content__title">NHÀ ĐẦU TƯ</h3>
              <p>
                <b>{NHA_DAU_TU[0]}</b>
              </p>
              <Row className="about__row--content__bottom">
                <img style={{ width: "100%" }} src={IMG_DAU_TU_LIST} alt="img_dau_tu" />
              </Row>
            </div>
          </Row>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default About;
