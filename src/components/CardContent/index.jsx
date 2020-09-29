import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { StarFilled, ThunderboltFilled } from "@ant-design/icons";
import { convertSalePrice, formatCommaNumber } from "../../utils";
function CardContent({
  img,
  title = "Europe Street beat",
  price = 0,
  rate = 0,
  comment = "1,222",
  order = "2K",
}) {
  return (
    <Card hoverable cover={<img alt="example" src={img} />}>
      <div className="card-content__top">
        <h3 className="card-content__title">{title}</h3>
        <div className="card-content__title_info">
          <span className="star">
            <StarFilled />
            <b>{rate}</b>
          </span>
          {comment}K đánh giá | {order}+ Đã được đặt
        </div>
      </div>
      <div className="card-content__price">
        <span className="sale">₫ {formatCommaNumber(price)}</span>
        <div className="price">
          ₫ {convertSalePrice(price)} <ThunderboltFilled />
        </div>
        <span className="order">Có thể đặt ngay hôm nay</span>
      </div>
    </Card>
  );
}

export default CardContent;