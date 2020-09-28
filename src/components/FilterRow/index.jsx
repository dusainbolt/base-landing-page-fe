import React, { useState } from "react";
import { Button, Checkbox, DatePicker, Input, Popover, Select, Slider } from "antd";
import { InfoCircleOutlined, DownOutlined } from "@ant-design/icons";
import { disabledDate, formatCommaNumber } from "../../utils";

function FilterRow({ className = "", callBackChange }) {
  const [maxValue, setMaxValue] = useState(8000000);
  const [minValue, setMinValue] = useState(0);
  const [rangeValue, setRangeValue] = useState("Mức giá");

  const onChangeSlider = value => {
    setMaxValue(Math.round((value[1] * 8000000) / 100));
    setMinValue(Math.round((value[0] * 8000000) / 100));
  };

  const onClickAccept = () => {
    setRangeValue(`₫${formatCommaNumber(minValue)} - ₫${formatCommaNumber(maxValue)}`);
    callBackChange();
  };

  const renderContentPrice = () => {
    return (
      <div className="price-content">
        <div className="title">
          ₫{formatCommaNumber(minValue)} - ₫{formatCommaNumber(maxValue)}+
        </div>
        <Slider onChange={onChangeSlider} range defaultValue={[0, 100]} />
        <div className="button">
          <Button onClick={() => onClickAccept()} className="primary no-bg">
            Đồng ý
          </Button>
        </div>
      </div>
    );
  };

  const handleChangeSelect = (value) => {
    console.log(`selected ${value}`);
    callBackChange();
  };

  return (
    <div className="tour__search-wrapper--row-search">
      <DatePicker format="DD/MM/YYYY" disabledDate={disabledDate} placeholder="Có thể đặt" />
      <Popover
        placement="topLeft"
        title={null}
        style={{ width: 500 }}
        content={renderContentPrice}
        trigger="click">
        <div className={`price-wrapper ${rangeValue !== "Mức giá" ? "active" : ""}`}>
          <span>{rangeValue}</span>
          <DownOutlined />
        </div>
      </Popover>
      <div className="accept-wrapper">
        <span>Xác nhận tức thời</span>
        <InfoCircleOutlined />
        <Checkbox onChange={""}></Checkbox>,
      </div>
      <div className="order-wrapper">
        <span>Sắp xếp theo：</span>
        <Select defaultValue="lucy" style={{ width: 180 }} onChange={handleChangeSelect}>
          <Select.Option value="jack">Stravel giới thiệu</Select.Option>
          <Select.Option value="lucy">Đặt nhiều nhất</Select.Option>
          <Select.Option value="disabled">Đánh giá cao nhất</Select.Option>
          <Select.Option value="Yiminghe">Giá (thấp đến cao)</Select.Option>
          <Select.Option value="Yiminghe">Dịch Vụ Mới Nổi Bật</Select.Option>
        </Select>
      </div>
    </div>
  );
}

export default FilterRow;
