import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

function CardBaiViet({ img }) {
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={
        <img alt="example" src={img} />
      }>
      <Meta title="Europe Street beat" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium, urna at congue dapibus, nulla ipsum imperdiet augue, gravida euismod" />
    </Card>
  );
}

export default CardBaiViet;

