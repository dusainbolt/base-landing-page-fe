import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import { actions } from "./actions";
import BackTop from "../../components/BackTop";
import IMG_TOP from "../../common/image/IMG_7694.PNG";
import { Carousel } from "antd";
import LazyLoad from "react-lazyload";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { IMG_SLIDE_TOP } from "../../common/configLandingPage";
function Home() {
  const dot = {
    dotPosition: "bottom",
  };
  let slide = useRef(null);

  const onPrevious = () => {
    slide.prev();
  };

  const onNext = () => {
    slide.next();
  };

  const renderListCarousel = () => {
    return IMG_SLIDE_TOP.map((item, index) => {
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
    </div>
  );
}

export default Home;
