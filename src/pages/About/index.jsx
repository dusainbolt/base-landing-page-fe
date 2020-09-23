import { Col, Row } from "antd";
import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { CONTENT_ABOUT, IMG_SLIDE_TOP } from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";

function About() {
  const { ABOUT_US, TAM_NHIN, SU_MENH, CAM_KET } = CONTENT_ABOUT;

  return (
    <div className="home about">
      <CarouselPage listImage={IMG_SLIDE_TOP} className="home__carousel-page" />
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <Row className="about__row">
            <div className="about__row--content">
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
            <div className="about__row--content">
              <h3 className="about__row--content__title">VỀ CHÚNG TÔI</h3>
              <p>
                <b>{TAM_NHIN[0]}</b>
              </p>
              <p>{TAM_NHIN[1]}</p>
            </div>
          </Row>
        </FadeIn>
      </LazyLoad>
      <Row className="about__row">
        <div className="about__row--content">
          <h3 className="about__row--content__title">VỀ CHÚNG TÔI</h3>
          <p>
            <b>{SU_MENH[0]}</b>
          </p>
          <p>{SU_MENH[1]}</p>
        </div>
      </Row>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <Row className="about__row bg">
            <div className="about__row--content">
              <h3 className="about__row--content__title">VỀ CHÚNG TÔI</h3>
              <p>
                <b>{CAM_KET[0]}</b>
              </p>
              <p>{CAM_KET[1]}</p>
              <Row className="about__row--content__bottom">
                <Col span={6}>
                  <div className="image-demo"></div>
                </Col>
                <Col span={6}>
                  <div className="image-demo"></div>
                </Col>
                <Col span={6}>
                  <div className="image-demo"></div>
                </Col>
                <Col span={6}>
                  <div className="image-demo"></div>
                </Col>
              </Row>
            </div>
          </Row>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default About;
