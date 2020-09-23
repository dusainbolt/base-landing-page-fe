import React from "react";
import FadeIn from "react-fade-in";
import IMG_MIEN_BAC from "../../../common/image/image3Mien/IMG_7697.PNG";
import IMG_MIEN_TRUG from "../../../common/image/image3Mien/IMG_7700.PNG";
import IMG_MIEN_NAM from "../../../common/image/image3Mien/IMG_7706.PNG";
import { Button, Col, Row } from "antd";
import LazyLoad from "react-lazyload";
import { CONTENT_TRAVEL } from "../../../common/configLandingPage";

function BaMien() {
  return (
    <div className="travel-vn">
      <LazyLoad height={500} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <Row>
            <Col span={12} order={1}>
              <div className="travel-vn__image-wrapper">
                <img src={IMG_MIEN_BAC} />
              </div>
            </Col>
            <Col span={12} order={2}>
              <div className="travel-vn__content">
                <div className="travel-vn__content--wrapper">
                  <h1 className="travel-vn__content--title">Miền Bắc</h1>
                  <p>{CONTENT_TRAVEL.MIEN_BAC[0]}</p>
                  <p>{CONTENT_TRAVEL.MIEN_BAC[1]}</p>
                  <p>{CONTENT_TRAVEL.MIEN_BAC[2]}</p>
                  <div className="button">
                    <Button className="primary no-bg">Xem thêm</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={500} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <Row>
            <Col span={12} order={2}>
              <div className="travel-vn__image-wrapper">
                <img src={IMG_MIEN_TRUG} />
              </div>
            </Col>
            <Col span={12} order={1}>
              <div className="travel-vn__content">
                <div className="travel-vn__content--wrapper left">
                  <h1 className="travel-vn__content--title">Miền Trung</h1>
                  <p>{CONTENT_TRAVEL.MIEN_TRUG[0]}</p>
                  <p>{CONTENT_TRAVEL.MIEN_TRUG[1]}</p>
                  <p>{CONTENT_TRAVEL.MIEN_TRUG[2]}</p>
                  <div className="button">
                    <Button className="primary no-bg">Xem thêm</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </FadeIn>
      </LazyLoad>

      <LazyLoad height={500} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <Row>
            <Col span={12} order={1}>
              <div className="travel-vn__image-wrapper">
                <img src={IMG_MIEN_NAM} />
              </div>
            </Col>
            <Col span={12} order={2}>
              <div className="travel-vn__content">
                <div className="travel-vn__content--wrapper">
                  <h1 className="travel-vn__content--title">Miền Nam</h1>
                  <p>{CONTENT_TRAVEL.MIEN_BAC[0]}</p>
                  <p>{CONTENT_TRAVEL.MIEN_BAC[1]}</p>
                  <p>{CONTENT_TRAVEL.MIEN_BAC[2]}</p>
                  <div className="button">
                    <Button className="primary no-bg">Xem thêm</Button>
                  </div>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default BaMien;
