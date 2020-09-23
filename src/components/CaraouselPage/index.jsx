import React, { useRef } from "react";
import { Carousel } from "antd";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { IMG_SLIDE_TOP } from "../../common/configLandingPage";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

function CarouselPage({ listImage, className }) {
  let slide = useRef(null);

  const renderListCarousel = () => {
    return listImage.map((item, index) => {
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

  return (
    <div className={`home__wrapper ${className}`}>
      <div className="home__wrapper--icon left">
        <LeftCircleOutlined onClick={onPrevious} />
      </div>
      <Carousel draggable ref={node => (slide = node)} dotPosition={"bottom"}>
        {renderListCarousel()}
      </Carousel>

      <div className="home__wrapper--icon right">
        <RightCircleOutlined onClick={onNext} />
      </div>
    </div>
  );
}

export default CarouselPage;
