import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import { actions } from "./actions";
import BackTop from "../../components/BackTop";
import CardContent from "../../components/CardContent";
import CardBaiViet from "../../components/CardBaiViet";

import { Button, Carousel, Col, Row } from "antd";
import LazyLoad from "react-lazyload";
import IMG_MIEN_BAC from "../../common/image/slideTop/IMG_TOP_1.jpg";
import IMG_ADDRESS from "../../common/image/imageAddress/fdopxuk1tinxvtylpax8.webp";
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { IMG_SLIDE_TOP, IMG_SLIDE_ADS, DICH_VU } from "../../common/configLandingPage";
import BaMien from "./HomeComponent/BaMien";
import CardAddress from "../../components/Dot";
import { browserHistory } from "../../utils/history";
import { onRedirect } from "../../utils";

function Home() {
  const dot = {
    dotPosition: "bottom",
  };
  let slide = useRef(null);
  let slideAds = useRef(null);

  const onPrevious = () => {
    slide.prev();
  };

  const onNext = () => {
    slide.next();
  };

  const onPreviousAds = () => {
    slideAds.prev();
  };

  const onNextAds = () => {
    slideAds.next();
  };

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

  const renderListCarouselAds = () => {
    return IMG_SLIDE_ADS.map((item, index) => {
      return (
        <div key={index} className="home__wrapper--image">
          <LazyLoad height={800} throttle={400}>
            <FadeIn delay={100} transitionDuration={500}>
              <img src={item} />
            </FadeIn>
          </LazyLoad>
        </div>
      );
    });
  };

  const renderContentDV = () => {
    return DICH_VU.map((item, index) => {
      return (
        <Col key={index} span={6}>
          <div className="home__row--col-content card-content">
            <CardContent
              title={item.title}
              price={item.price}
              sale={item.sale}
              rate={item.rate}
              comment={item.comment}
              order={item.order}
              img={item.img}
            />
          </div>
        </Col>
      );
    });
  };

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__wrapper--icon left">
          <LeftCircleOutlined onClick={onPrevious} />
        </div>
        <Carousel draggable ref={node => (slide = node)} dotPosition={dot}>
          {renderListCarousel()}
        </Carousel>
        <div className="home__wrapper--icon right">
          <RightCircleOutlined onClick={onNext} />
        </div>
      </div>
      <div className="home__container">
        <BaMien />
        <LazyLoad height={800} throttle={400}>
          <FadeIn delay={100} transitionDuration={500}>
            <div className="home__wrapper carousel-ads">
              <div className="home__wrapper--icon left">
                <LeftOutlined onClick={onPreviousAds} />
              </div>
              <Carousel draggable ref={node => (slideAds = node)} dotPosition={dot}>
                {renderListCarouselAds()}
              </Carousel>
              <div className="home__wrapper--icon right">
                <RightOutlined onClick={onNextAds} />
              </div>
            </div>
          </FadeIn>
        </LazyLoad>
        <LazyLoad height={800} throttle={400}>
          <FadeIn delay={100} transitionDuration={500}>
            <div className="home__row">
              <h1 className="home__row--title">DỊCH VỤ PHỔ BIẾN</h1>
              <Row gutter={[16, 16]}>
                {renderContentDV()}
                <div className="button">
                  <Button onClick={() => onRedirect("/mien")} className="primary no-bg">Xem thêm</Button>
                </div>
              </Row>
            </div>
          </FadeIn>
        </LazyLoad>
        <LazyLoad height={800} throttle={400}>
          <FadeIn delay={100} transitionDuration={500}>
            <div className="home__row">
              <h1 className="home__row--title">ĐIỂM ĐẾN NỔI BẬT</h1>
              <Row gutter={[16, 16]}>
                <Col span={4}>
                  <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
                </Col>
                <Col span={4}>
                  <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
                </Col>
                <Col span={4}>
                  <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
                </Col>
                <Col span={4}>
                  <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
                </Col>
                <Col span={4}>
                  <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
                </Col>
                <Col span={4}>
                  <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
                </Col>
              </Row>
            </div>
          </FadeIn>
        </LazyLoad>
        <LazyLoad height={800} throttle={400}>
          <FadeIn delay={100} transitionDuration={500}>
            <div className="home__row">
              <h1 className="home__row--title">ĐIỂM TIN DU LỊCH</h1>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <div className="home__row--col-content">
                    <CardBaiViet className="card--content" img={IMG_MIEN_BAC} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="home__row--col-content">
                    <CardBaiViet img={IMG_MIEN_BAC} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="home__row--col-content">
                    <CardBaiViet img={IMG_MIEN_BAC} />
                  </div>
                </Col>
              </Row>
            </div>
          </FadeIn>
        </LazyLoad>
      </div>
    </div>
  );
}

export default Home;
