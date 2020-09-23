import { Col, Row } from "antd";
import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { CONTENT_ABOUT, IMG_SLIDE_TOP } from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";

function About() {
  let slide = useRef(null);

  const renderListCarousel = () => {
    return IMG_SLIDE_TOP.map((item, index) => {
      return (
        <div key={index} className="home__wrapper--image">
          <LazyLoad height={800} throttle={400}>
            <FadeIn delay={100} transitionDuration={500}>
              {index !== IMG_SLIDE_TOP.length - 1 ? (
                <img src={item} />
              ) : (
                <video loop autoPlay>
                  <source src={item} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </FadeIn>
          </LazyLoad>
        </div>
      );
    });
  };

  const onPrevious = () => {
    slide.prev();
  };

  const onNext = () => {
    slide.next();
  };

  const { ABOUT_US, TAM_NHIN, SU_MENH, CAM_KET } = CONTENT_ABOUT;

  return (
    <div className="home about">
      <CarouselPage listImage={IMG_SLIDE_TOP} className="home__carousel-page" />
      <Row className="about__row">
        <div className="about__row--content">
          <h3 className="about__row--content__title">VỀ CHÚNG TÔI</h3>
          <p>
            <b>{ABOUT_US[0]}</b>
          </p>
          <p>{ABOUT_US[1]}</p>
        </div>
      </Row>
      <Row className="about__row bg">
        <div className="about__row--content">
          <h3 className="about__row--content__title">VỀ CHÚNG TÔI</h3>
          <p>
            <b>{ABOUT_US[0]}</b>
          </p>
          <p>{ABOUT_US[1]}</p>
        </div>
      </Row>
      <Row className="about__row">
        <div className="about__row--content">
          <h3 className="about__row--content__title">VỀ CHÚNG TÔI</h3>
          <p>
            <b>{ABOUT_US[0]}</b>
          </p>
          <p>{ABOUT_US[1]}</p>
        </div>
      </Row>
      <Row className="about__row bg">
        <div className="about__row--content">
          <h3 className="about__row--content__title">VỀ CHÚNG TÔI</h3>
          <p>
            <b>{ABOUT_US[0]}</b>
          </p>
          <p>{ABOUT_US[1]}</p>
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
    </div>
  );
}

export default About;
