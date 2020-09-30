import { Col, Row } from "antd";
import React from "react";

function CardBlogNgang({ img, title, description, date, type }) {
  return (
    <div className="blog__card">
      <Row gutter={[16, 8]}>
        <Col span={8}>
          <img src={img} alt="img"/>
        </Col>
        <Col span={16}>
          <span className="blog__span-title">{type}</span>
          <div className="blog__title-card">{title}</div>
          <div className="blog__description">{description}</div>
          <div className="blog__date">{date}</div>
        </Col>
      </Row>
    </div>
  );
}
export default CardBlogNgang;
