import { Breadcrumb, Col, DatePicker, Input, Popconfirm, Popover, Row, Slider, Tabs } from "antd";
import React from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { CONTENT_ABOUT, TOUR_BAN_CHAY } from "../../common/configLandingPage";
import FilterCategory from "../../components/FilterAddress";
import FilterAddress from "../../components/FilterAddress";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { disabledDate, shuffleArray } from "../../utils";
import FilterRow from "../../components/FilterRow";
import CardContent from "../../components/CardContent";
import { useState } from "react";
import { useMemo } from "react";

function Tour() {
  
  const [dataTour, setDataTour] = useState(TOUR_BAN_CHAY);

  const renderContentDV = useMemo(() => {
    return shuffleArray(TOUR_BAN_CHAY).map((item, index) => {
      return shuffleArray(TOUR_BAN_CHAY).map((item, index) => {
        return (
          <Col key={index} span={8}>
            <div className="home__row--col-content card-content">
              <CardContent
                title={item.title}
                price={item.price}
                sale={item.sale}
                rate={item.rate}
                comment={item.comment}
                order={item.order}
                img={item.img}
              />
            </div>
          </Col>
        );
      });
    });
  },[dataTour]);

  const shuffleData = () => {
    setDataTour([ Math.floor(Math.random() * 9999999)]);
  };

  return (
    <div className="home about tour">
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="tour__content-wrapper top">
            <Row className="tour__row">
              <Col span={24}>
                <Breadcrumb separator=">">
                  <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
                  <Breadcrumb.Item>Những hoạt động nổi bật</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col span={24}>
                <h3 className="tour__row--title">Những hoạt động nổi bật</h3>
              </Col>
            </Row>
            <Row className="tour__row search-page">
              <div className="tour__search-left">
                <FilterAddress callBackChange={shuffleData} />
                <FilterCategory callBackChange={shuffleData}/>
              </div>
              <div className="tour__search-right">
                <div className="tour__search-wrapper">
                  <h4>Tìm thấy 4225 hoạt động</h4>
                  <Input
                    className="input-small"
                    placeholder="Kêt quả tìm kiếm"
                    suffix={
                      <SearchOutlined style={{ color: "rgba(0,0,0,.45)", fontSize: "20px" }} />
                    }
                  />
                  <FilterRow callBackChange={shuffleData} />
                  <Row className="tour__result-wrapper" gutter={[16, 16]}>
                    {renderContentDV}
                  </Row>
                </div>
              </div>
            </Row>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default Tour;
