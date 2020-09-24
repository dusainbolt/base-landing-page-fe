import { Button, Carousel, Col, Row } from "antd";
import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { DICH_VU, IMG_SLIDE_TOP, MIEN_LQ } from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";
import IMG_MIEN_BAC from "../../common/image/slideTop/IMG_TOP_2.jpg";
import CardContent from "../../components/CardContent";
import CardAddress from "../../components/Dot";
import IMG_ADDRESS from "../../common/image/imageAddress/fdopxuk1tinxvtylpax8.webp";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function About() {
  let slide = useRef(null);

  const onPrevious = () => {
    slide.prev();
  };

  const onNext = () => {
    slide.next();
  };

  const renderContentDV = (listContent, col) => {
    return listContent.map((item, index) => {
      return (
        <Col key={index} span={col}>
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
    <div className="home about">
      <CarouselPage listImage={IMG_SLIDE_TOP} className="home__carousel-page page-bottom" />
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row">
            <Row>
              <Col span={8}>
                <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
              </Col>
              <Col span={8}>
                <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
              </Col>
              <Col span={8}>
                <CardAddress title="Phú Quốc" img={IMG_ADDRESS} />
              </Col>
            </Row>
          </div>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row">
            <h1 className="home__row--title">KHÁM PHÁ THÀNH PHỐ</h1>
            <div className="home__wrapper--icon left">
              <LeftOutlined onClick={onPrevious} />
            </div>
            <Carousel draggable ref={node => (slide = node)} dotPosition={"bottom"}>
              <div>
                <Row>{renderContentDV(DICH_VU, 6)}</Row>
              </div>
              <div>
                <Row>{renderContentDV(DICH_VU, 6)}</Row>
              </div>
            </Carousel>
            <div className="home__wrapper--icon right">
              <RightOutlined onClick={onNext} />
            </div>
          </div>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row">
            <h1 className="home__row--title">BÀI VIẾT</h1>
            <div className="home__row--new">
              <Row>
                <Col span={18}>
                  <div className="content-large">
                    <h3 className="home__row--new__title">Tieu De</h3>
                    <p className="home__row--new__content">
                      "Tận hưởng những ngày nghỉ tuyệt vời chưa bao giờ đơn giản đến như vậy", "Du
                      lịch là tận hưởng! Rất nhiều hoạt động du lịch đang chờ bạn khám phá, mục tiêu
                      của Klook luôn là kết nối du khách với những trải nghiệm du lịch thú vị."
                    </p>
                    <div className="button">
                      <Button className="primary btn-primary">Xem thêm</Button>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="content-small">
                    <div className="bg"></div>
                    <h3 className="home__row--new__title"></h3>
                    <div className="button">
                      <Button className="primary btn-primary">Xem thêm</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row">
            <h1 className="home__row--title">CÁC ĐỊA ĐIỂM LIÊN QUAN</h1>
            <div>
              <Row>{renderContentDV(MIEN_LQ, 8)}</Row>
            </div>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default About;