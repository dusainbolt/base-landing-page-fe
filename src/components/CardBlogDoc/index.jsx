import { Card } from "antd";
import React from "react";

function CardBlog({  img, title, description, date, type  }) {
  return (
    <Card style={{ width: "100%" }} bordered={false} cover={<img alt="example" src={img} />}>
      <span className="blog__span-title">{type}</span>
      <div className="blog__title-card">{title}</div>
      <div className="blog__description">{description}</div>
      <div className="blog__date">{date}</div>
    </Card>
  );
}

export default CardBlog;
