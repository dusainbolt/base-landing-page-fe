import { Col, Row, Tabs } from "antd";
import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { CONTENT_ABOUT, HELP_CONTENT, IMG_SIDE_ABOUT } from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";
import IMG_DAU_TU_LIST from "../../common/image/dautudulich.png";
import { RightOutlined } from "@ant-design/icons";

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

  const renderContentHelp = () => {
    return HELP_CONTENT.map(item => {
      return (
        <Col key={item.title} className="help__row--col" span={6}>
          <img src={item.img} />
          <div className="help__info">
            <h3 className="help__info--title">{item.title}</h3>
            <span>{item.description}</span>
          </div>
        </Col>
      );
    });
  };

  return (
    <div className="home about">
      <CarouselPage listImage={IMG_SIDE_ABOUT} className="home__carousel-page" />
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row help">
            <h1 className="help__title-popular">Các chủ đề phổ biến</h1>
            <div className="help__content-popular">
              <div className="help__content-popular--item">
                <div>Stravel thanh toán bằng đơn vị tiền tệ nào ?</div>
                <RightOutlined />
              </div>
              <div className="help__content-popular--item">
                <div>Làm sao tôi biết được chính xác dịch vụ bao nhiêu tiền ?</div>
                <RightOutlined />
              </div>
            </div>
          </div>
          <div className="home__row help__content">
            <Row className="help__row">{renderContentHelp()}</Row>
          </div>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row help__content">
            <Row className="help__row">
              <Col span={6}>ssssssssssssss</Col>
              <Col span={18}>ssssssssssssssss</Col>
            </Row>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default About;
