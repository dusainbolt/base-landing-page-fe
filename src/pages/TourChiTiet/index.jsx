import {
  Breadcrumb,
  Button,
  Carousel,
  Col,
  DatePicker,
  Divider,
  Input,
  Popconfirm,
  Popover,
  Row,
  Slider,
  Tabs,
} from "antd";
import React, { useRef } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { IMG_SLIDE_ADS, TOUR_BAN_CHAY } from "../../common/configLandingPage";
import {
  HeartOutlined,
  StarFilled,
  LeftOutlined,
  RightOutlined,
  DollarOutlined,
  PrinterOutlined,
  CarOutlined,
  ClockCircleOutlined,
  TagsOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  ClockCircleFilled,
  ThunderboltFilled,
  AppstoreAddOutlined
} from "@ant-design/icons";
import { disabledDate, shuffleArray } from "../../utils";
import FilterRow from "../../components/FilterRow";
import CardContent from "../../components/CardContent";
import { useState } from "react";
import { useMemo } from "react";

const configInfoTop = [
  {
    title: "Hoàn huỷ miễn phí trong 48h",
    icon: DollarOutlined,
  },
  {
    title: "Xuất trình vé điện tử hoặc in voucher",
    icon: PrinterOutlined,
  },
  {
    title: "Thời hạn:9 giờ",
    icon: ClockCircleOutlined,
  },
  {
    title: "Tuỳ chọn đón tại khách sạn",
    icon: CarOutlined,
  },
  {
    title: "Tour ghép",
    icon: TagsOutlined,
  },
  {
    title: "Tiếng Anh/Tiếng Việt",
    icon: GlobalOutlined,
  },
];

function Tour() {
  const [dataTour, setDataTour] = useState(TOUR_BAN_CHAY);
  let slideAds = useRef(null);

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
  }, [dataTour]);

  const shuffleData = () => {
    setDataTour([Math.floor(Math.random() * 9999999)]);
  };

  const onPreviousAds = () => {
    slideAds.prev();
  };

  const onNextAds = () => {
    slideAds.next();
  };

  const renderListInfoTop = () => {
    return configInfoTop.map(item => {
      const Icon = item.icon;
      return (
        <li key={item.title}>
          <div className="content">
            <Icon />
            {item.title}
          </div>
        </li>
      );
    });
  };

  const renderListCarouselAds = () => {
    return IMG_SLIDE_ADS.map((item, index) => {
      return (
        <div key={index} className="home__wrapper--image">
          <LazyLoad height={800} throttle={400}>
            <FadeIn delay={100} transitionDuration={500}>
              <img src={item} />
            </FadeIn>
          </LazyLoad>
        </div>
      );
    });
  };

  return (
    <div className="home about tour">
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="tour__content-wrapper top">
            <LazyLoad height={800} throttle={400}>
              <FadeIn delay={100} transitionDuration={500}>
                <div className="home__wrapper carousel-ads">
                  <div className="home__wrapper--icon left">
                    <LeftOutlined onClick={onPreviousAds} />
                  </div>
                  <Carousel draggable ref={node => (slideAds = node)}>
                    {renderListCarouselAds()}
                  </Carousel>
                  <div className="home__wrapper--icon right">
                    <RightOutlined onClick={onNextAds} />
                  </div>
                </div>
              </FadeIn>
            </LazyLoad>
            <LazyLoad height={800} throttle={400}>
              <FadeIn delay={100} transitionDuration={500}>
                <div className="tour__row breadcrumb-top chitiet-tour">
                  <Row gutter={[48, 16]}>
                    <Col span={17}>
                      <Breadcrumb separator=">">
                        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item>VIỆT NAM</Breadcrumb.Item>
                        <Breadcrumb.Item>Phú Quốc</Breadcrumb.Item>
                        <Breadcrumb.Item>Tour & Tham quan ngắm cảnh</Breadcrumb.Item>
                        <Breadcrumb.Item>Dịch vụ lặn</Breadcrumb.Item>
                      </Breadcrumb>
                      <div className="tour__title-page">
                        Chuyến phiêu lưu du thuyền ngày và đêm ở Phú Quốc
                      </div>
                      <div className="tour__rate-row">
                        <span className="star">
                          <StarFilled />
                          <b>4.5</b>
                        </span>
                        <span className="info">
                          <span className="rate">(250 đánh giá)</span> | 402+ Đã được đặt
                        </span>
                        <div className="like">
                          <HeartOutlined /> Yêu thích
                        </div>
                      </div>
                      <Divider className="start-list" />
                      <ul className="chitiet-tour__list-top">{renderListInfoTop()}</ul>
                      <Divider />
                      <div>
                        <ul className="ul-info">
                          <li>
                            Tận hưởng khoảnh khắc thư giãn khi bạn tham gia chuyến du thuyền ngắm
                            đảo Phú Quốc xinh đẹp
                          </li>
                          <li>
                            Trải nghiệm hoạt động bơi lội và lặn với ống thở trong làn nước trong
                            xanh xung quanh các bãi biển địa phương
                          </li>
                          <li>
                            Sau khi ngắm hoàng hôn trên du thuyền, hãy thử tài câu mực và thưởng
                            thức bữa ăn ngon miệng
                          </li>
                        </ul>
                      </div>
                      <Divider />
                    </Col>
                    <Col span={7}>
                      <div className="chitiet-tour__card-price-top">
                        <div className="pay-info">
                          <p className="first">
                            Chính sách đảm bảo giá của Stravel <InfoCircleOutlined />
                          </p>
                          <p className="price">
                            <strong>₫ 533,684</strong>
                            <span>593,317</span>
                          </p>
                          <p className="accept">
                            <ClockCircleFilled />
                            Có thể đặt từ ngày mai
                          </p>
                          <p className="accept">
                            <ThunderboltFilled />
                            Xác nhận tức thời
                          </p>
                          <div className="button">
                            <Button icon={<ThunderboltFilled />} className="primary btn-primary">
                              Nhiều lựa chọn
                            </Button>
                          </div>
                        </div>
                        <div className="para-bottom">
                          <AppstoreAddOutlined />
                          <p>
                            Nhận ₫29,940.1 ưu đãi cho đơn hàng đầu tiên trên ứng dụng Klook với mã
                            giảm giá <strong>mobile10</strong>
                          </p>
                        </div>
                      </div>
                      <div></div>
                    </Col>
                  </Row>
                </div>
              </FadeIn>
            </LazyLoad>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default Tour;
