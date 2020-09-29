import {
  Breadcrumb,
  Carousel,
  Col,
  DatePicker,
  Input,
  Popconfirm,
  Popover,
  Row,
  Slider,
  Tabs,
} from "antd";
import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { CONTENT_ABOUT, IMG_SLIDE_ADS, TOUR_BAN_CHAY } from "../../common/configLandingPage";
import FilterCategory from "../../components/FilterAddress";
import FilterAddress from "../../components/FilterAddress";
import { SearchOutlined, DownOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { disabledDate, shuffleArray } from "../../utils";
import FilterRow from "../../components/FilterRow";
import CardContent from "../../components/CardContent";
import { useState } from "react";
import { useMemo } from "react";

function Tour() {
  const [dataTour, setDataTour] = useState(TOUR_BAN_CHAY);
  let slideAds = useRef(null);

  const renderContentDV = useMemo(() => {
    return shuffleArray(TOUR_BAN_CHAY).map((item, index) => {
      return shuffleArray(TOUR_BAN_CHAY).map((item, index) => {
        return (
          <Col key={index} span={8}>
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
    });
  }, [dataTour]);

  const shuffleData = () => {
    setDataTour([Math.floor(Math.random() * 9999999)]);
  };

  const onPreviousAds = () => {
    slideAds.prev();
  };

  const onNextAds = () => {
    slideAds.next();
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

  return (
    <div className="home about tour">
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="tour__content-wrapper top">
            <LazyLoad height={800} throttle={400}>
              <FadeIn delay={100} transitionDuration={500}>
                <div className="home__wrapper carousel-ads">
                  <div className="home__wrapper--icon left">
                    <LeftOutlined onClick={onPreviousAds} />
                  </div>
                  <Carousel draggable ref={node => (slideAds = node)}>
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
                <div className="tour__row">
                sdsdsdsdsd
                </div>
              </FadeIn>
            </LazyLoad>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default Tour;
