import { Breadcrumb, Carousel, Col, Divider, Row } from "antd";
import React, { useMemo, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  IMG_SIDE_ABOUT,
  IMG_SIDE_ADS_MIEN,
  IMG_SLIDE_ADS,
  MIEN_BAI_VIET,
  MIEN_HD_NOI_TIENG,
  TOUR_BAN_CHAY,
} from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";
import CardContent from "../../components/CardContent";
import ContentSide from "../../components/SlideContent";
import IMG_NGANG_1 from "../../common/image/DichVuPhoBien/dich_vu_1.jpg";
import IMG_NGANG_2 from "../../common/image/DichVuPhoBien/dich_vu_2.jpg";
import CardTwoNgang from "../../components/CardTwoNgang";
import FilterAddress from "../../components/FilterAddress";

import FilterRow from "../../components/FilterRow";
import { shuffleArray } from "../../utils";

function Mien() {

  const [dataTour, setDataTour] = useState(TOUR_BAN_CHAY);

  const renderContentDV = (listContent, col) => {
    return listContent.map((item, index) => {
      return (
        <Col key={index} span={col}>
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
  };

  let slideAds = useRef(null);

  const onPreviousAds = () => {
    slideAds.prev();
  };

  const onNextAds = () => {
    slideAds.next();
  };

  const renderListCarouselAds = () => {
    return IMG_SIDE_ADS_MIEN.map((item, index) => {
      return (
        <div key={index} className="home__wrapper--image">
          <LazyLoad height={800} throttle={400}>
            <FadeIn delay={100} transitionDuratioxn={500}>
              <img src={item} alt="img"/>
            </FadeIn>
          </LazyLoad>
        </div>
      );
    });
  };

  const shuffleData = () => {
    setDataTour([Math.floor(Math.random() * 9999999)]);
  };

  const renderContentDV1 = useMemo(() => {
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
  }, [dataTour]);

  return (
    <div className="home about tour mien">
      <CarouselPage
        listImage={IMG_SIDE_ABOUT}
        sideContent={
          <ContentSide titleSmall="Thay đổi điểm đến" titleCity="MIỀN BẮC" titleButton="Việt Nam" />
        }
        className="home__carousel-page content-side"
      />
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="tour__content-wrapper top">
            <Row className="tour__row breadcrumb">
              <Col span={24}>
                <Breadcrumb separator=">">
                  <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
                  <Breadcrumb.Item>Miền Bắc</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
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
                <CardTwoNgang
                  title="Bài Viết"
                  img_1={IMG_NGANG_1}
                  img_2={IMG_NGANG_2}
                  titleContent_1="Phú Quốc có gì chơi?"
                  titleContent_2="Vui chơi thả ga cùng gia đình"
                  content_1={`"Tận hưởng những ngày nghỉ tuyệt vời chưa bao giờ đơn giản đến như vậy", "Du
          lịch là tận hưởng! Rất nhiều hoạt động du lịch đang chờ bạn khám phá, mục tiêu
          của Klook luôn là kết nối du khách với những trải nghiệm du lịch thú vị.`}
                  content_2={`"Tận hưởng những ngày nghỉ tuyệt vời chưa bao giờ đơn giản đến như vậy", "Du
          lịch là tận hưởng! Rất nhiều hoạt động du lịch đang chờ bạn khám phá, mục tiêu
          của Klook luôn là kết nối du khách với những trải nghiệm du lịch thú vị.`}
                  titleBtn="Xem thêm"
                  callBackBtn={() => console.log(123123)}
                />
              </FadeIn>
            </LazyLoad>
            <LazyLoad height={800} throttle={400}>
              <FadeIn delay={100} transitionDuration={500}>
                <div className="tour__row">
                  <Row gutter={[16, 16]}>{renderContentDV(MIEN_BAI_VIET, 6)}</Row>
                </div>
              </FadeIn>
            </LazyLoad>
            <LazyLoad height={800} throttle={400}>
              <FadeIn delay={100} transitionDuration={500}>
                <div className="tour__row">
                  <h1 className="home__row--title">Hoạt Động Du Lịch Phú Quốc Nổi Tiếng</h1>
                  <Row gutter={[16, 16]}>{renderContentDV(MIEN_HD_NOI_TIENG, 6)}</Row>
                </div>
              </FadeIn>
            </LazyLoad>
            <LazyLoad height={800} throttle={400}>
              <FadeIn delay={100} transitionDuration={500}>
                <Row className="tour__row search-page">
                  <div className="tour__search-left">
                    <FilterAddress callBackChange={shuffleData} />
                  </div>
                  <div className="tour__search-right">
                    <div className="tour__search-wrapper">
                      <h4>Tìm thấy 4225 hoạt động</h4>
                      <FilterRow callBackChange={shuffleData} />
                      <Row className="tour__result-wrapper" gutter={[16, 16]}>
                        {renderContentDV1}
                      </Row>
                    </div>
                  </div>
                </Row>
              </FadeIn>
            </LazyLoad>
          </div>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row mien-note">
            <h1 className="home__row--title title-mien">Cẩm Nang Du Lịch</h1>
            <div className="wrapper">
              <Row className="" gutter={[16, 48]}>
                <Col span={17}>
                  <div className="wrapper-title">Vài nét về Phú Quốc</div>
                  <p>
                    Nằm tại địa phận tỉnh Kiên Giang, Phú Quốc đích thị là thiên đường Đảo Ngọc với
                    những dải cát trắng và làn nước trong xanh. Nếu bạn muốn tìm một điểm du lịch
                    biển đảo thì nơi đây chắc chắn là điểm đến hoàn hảo cho bạn. Có nhiều phương
                    tiện di chuyển ra Phú Quốc bao gồm cả máy bay lẫn tàu cao tốc Phú Quốc Express,
                    tuỳ theo sự lựa chọn của bạn. Hãy dành thời gian dưới ánh mặt trời tại Bãi Sao
                    hoặc ghé đến các hòn đảo nằm ở phía nam Phú Quốc để thỏa thích bơi lặn. Thậm
                    chí, bạn có thể câu cá hay câu mực cho bữa tối của mình ở đây!
                  </p>
                  <br />
                  <p>
                    Nếu bạn là một người yêu động vật, hãy ghé đến Vinpearl Safari và trải nghiệm
                    vườn thú mở đầu tiên và duy nhất của Việt Nam! Trải nghiệm tại Vinpearl Safari
                    còn đưa bạn đi dọc theo những con đường rợp bóng cây và gặp gỡ nhiều loài động
                    vật hoang dã khác nhau như voi, hươu cao cổ và thậm chí cả hổ nữa!
                  </p>
                </Col>
                <Col span={7}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4023672.179095975!2d107.19344705575989!3d9.986482318984237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbdd72cdb!2zUGjDuiBRdeG7kWM!5e0!3m2!1svi!2s!4v1601308539741!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    aria-hidden="false"
                  ></iframe>
                </Col>
                <Divider />
              </Row>
              <div className="wrapper-title">Thời tiết địa phương</div>
              <Row className="temp" gutter={[16, 48]}>
                <Col span={6}>
                  <div className="title-month">THG 12 - THG 2</div>
                  <div className="title-temp">
                    <span className="item-1">31°</span>
                    <span className="item-2">23°</span>
                  </div>
                  <p>Mùa khô - thời điểm tuyệt nhất để du lịch Phú Quốc</p>
                </Col>
                <Col span={6}>
                  <div className="title-month">THG 12 - THG 2</div>
                  <div className="title-temp">
                    <span className="item-1">31°</span>
                    <span className="item-2">23°</span>
                  </div>
                  <p>Mùa khô - thời điểm tuyệt nhất để du lịch Phú Quốc</p>
                </Col>{" "}
                <Col span={6}>
                  <div className="title-month">THG 12 - THG 2</div>
                  <div className="title-temp">
                    <span className="item-1">31°</span>
                    <span className="item-2">23°</span>
                  </div>
                  <p>Mùa khô - thời điểm tuyệt nhất để du lịch Phú Quốc</p>
                </Col>{" "}
                <Col span={6}>
                  <div className="title-month">THG 12 - THG 2</div>
                  <div className="title-temp">
                    <span className="item-1">31°</span>
                    <span className="item-2">23°</span>
                  </div>
                  <p>Mùa khô - thời điểm tuyệt nhất để du lịch Phú Quốc</p>
                </Col>
                <Divider />
              </Row>
              <div className="wrapper-title">Thông tin chung</div>
              <Row className="temp" gutter={[16, 48]}>
                <Col span={6}>
                  <div className="title-month">Múi giờ</div>
                  <div className="title-temp">
                    <span className="item-3">GMT +07:00</span>
                  </div>
                  <p>Không chênh lệch thời gian</p>
                </Col>
                <Col span={6}>
                  <div className="title-month">Tiền tệ</div>
                  <div className="title-temp">
                    <span className="item-3">Việt Nam Đồng</span>
                  </div>
                  <p>1VND = 1.00VND</p>
                </Col>
                <Col span={6}>
                  <div className="title-month">Thời gian tuyệt nhất để vi vu</div>
                  <div className="title-temp">
                    <span className="item-3">VTHG 1</span>
                  </div>
                  <p>Lễ hội âm nhạc Epizode Việt Nam</p>
                </Col>
              </Row>
            </div>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default Mien;
