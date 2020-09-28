import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function SideContent({ titleSmall, titleCity, titleButton }) {
  return (
    <div className="home__slide-content">
      <div className="title-small">
        <span>{titleSmall}</span>
      </div>
      <div className="title-city">{titleCity}</div>
      <div className="button">
        <Button icon={<ArrowRightOutlined />} className="btn-white">
          {titleButton}
        </Button>
      </div>
    </div>
  );
}
