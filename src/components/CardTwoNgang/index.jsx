import { Button, Card, Col, Row } from "antd";
import React from "react";

function CardContentTwo({
  img_1,
  img_2,
  title,
  titleContent_1,
  titleContent_2,
  content_1,
  content_2,
  callBackBtn,
  titleBtn
}) {
  return (
    <div className="home__row">
      <h1 className="home__row--title">{title}</h1>
      <div className="home__row--new">
      <Row gutter={[16, 16]}>
          <Col span={18}>
            <div className="content-large">
              <div className="img-bg">
                <img src={img_1} />
              </div>
              <h3 className="home__row--new__title">{titleContent_1}</h3>
              <p className="home__row--new__content">{content_1}</p>
              <div className="button">
                <Button onClick={callBackBtn} className="primary btn-primary">
                  {titleBtn}
                </Button>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="content-small">
              <div className="img-bg">
                <img src={img_2} />
              </div>
              <h3 className="title">{titleContent_2}</h3>
              <p className="content">{content_2}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CardContentTwo;
