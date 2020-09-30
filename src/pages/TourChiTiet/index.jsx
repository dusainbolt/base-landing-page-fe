import { Breadcrumb, Button, Carousel, Col, Divider, Row, Comment, Rate } from "antd";
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
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { getRandomInt, onRedirect, shuffleArray } from "../../utils";
import { useState } from "react";
import IMG_BLOG_ITEM_1 from "../../common/image/DichVuPhoBien/dich_vu_3.jpg";
import TextArea from "antd/lib/input/TextArea";
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
  let slideAds = useRef(null);

  const data = [
    {
      author: "Nguyễn Văn An",
      actions: [
        <span className="comment-rate" key={1}>
          <Rate disabled defaultValue={5} />
          Rất hài lòng
        </span>,
      ],
      avatar:
        "https://timban.baotreonline.com/wp-content/themes/gwangi-sensual/assets/images/avatars/user-avatar.png",
      content: (
        <p>
          Một trải nghiệm tuyệt vời trong chuyến bay kéo dài 45 phút của chúng tôi ở đảo Hồng Kông,
          Cửu Long, Lãnh thổ mới, các hòn đảo xa xôi và hướng nhìn về phía Thâm Quyến. Ben Harding -
          phi công của chúng tôi - cực kỳ am hiểu và nói với chúng tôi rất nhiều thông tin mà chúng
          tôi sẽ không bao giờ có được từ một cuốn sách hướng dẫn, và tất cả được thực hiện một cách
          thú vị. Tất cả các phi hành đoàn mặt đất đều vô cùng hữu ích từ khi chúng tôi đến lúc
          chúng tôi rời đi. Mọi người đều vô cùng thân thiện chào đón. Tôi muốn giới thiệu chuyến đi
          này như một cách tuyệt vời để xem các phần của HK không thể đến được bằng MTR, taxi, xe
          buýt, xe điện hoặc đi bộ.
        </p>
      ),
    },
    {
      author: "Laurent",
      actions: [
        <span className="comment-rate" key={1}>
          <Rate disabled defaultValue={5} />
          Rất hài lòng
        </span>,
      ],
      avatar:
        "https://timban.baotreonline.com/wp-content/themes/gwangi-sensual/assets/images/avatars/user-avatar.png",
      content: (
        <p>
          Trải nghiệm tuyệt vời để khám phá HK theo một cách khác. Một chút đắt tiền nhưng chắc chắn
          đáng thử. Đội ngũ rất thân thiện.
        </p>
      ),
    },
  ];
  const renderListComment = () => {
    return shuffleArray(data).map((item, index) => {
      return shuffleArray(data).map((item, index) => {
        return (
          <>
            <Comment
              key={index + getRandomInt(3)}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              actions={item.actions}
            />
            <Divider />
          </>
        );
      });
    });
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
              <img src={item} alt="img"/>
            </FadeIn>
          </LazyLoad>
        </div>
      );
    });
  };

  return (
    <div className="home about tour">
      <div className="tour__shop">
        <div className="tour__shop--wrapper">
          <div className="para">Xin hoàn tất các mục yêu cầu để chuyển đến bước tiếp theo </div>
          <div className="button-wrapper">
            <Button onClick={() => onRedirect("/shoppingcart")} className="primary btn-primary add">THÊM VÀO GIỎ HÀNG</Button>
            <Button onClick={() => onRedirect("/shoppingcart")} className="primary btn-primary">ĐẶT NGAY</Button>
          </div>
        </div>
      </div>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="tour__content-wrapper top">
            <LazyLoad height={800} throttle={400}>
              <FadeIn delay={100} transitionDuration={500}>
                <div className="home__wrapper carousel-ads tour-chi-tiet">
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
                    </Col>
                  </Row>
                  <div className="tour__row chitiet-tour__description chitiet-tour">
                    <Row className="row-wrapper" gutter={[48, 16]}>
                      <Col span={17}>
                        <h3 className="title-description">
                          <span>Bạn được trải nghiệm những gì?</span>
                        </h3>
                        <p>
                          Tận hưởng khung cảnh tuyệt đẹp của đại dương từ sự thoải mái của một con
                          suối nhân tạo, nằm ở một bãi biển tuyệt đẹp trên đảo Batanes. Nhấn chìm
                          những lo lắng của bạn trong lúc ngâm mình thư giãn trong làn nước mát. Mặc
                          dù đây thực sự đáng để mong đợi, nhưng việc đi bộ 30 phút từ điểm xuất
                          phát để đến đó mang đến một cái nhìn tuyệt đẹp về đồng cỏ xanh rộng lớn và
                          những ngọn đồi thoai thoải. Thưởng thức một bữa trưa no căng và ngon miệng
                          sau trải nghiệm mới mẻ. Chọn giữa tour buổi sáng hoặc buổi chiều với dịch
                          vụ đón và trả khách ở khách sạn tiện lợi và thoải mái trong thị trấn của
                          Basco.
                        </p>
                        <div className="blog-item__image-page">
                          <img src={IMG_BLOG_ITEM_1} alt="img"/>
                        </div>
                        <Divider />
                        <h3 className="title-description">
                          <span>Thông tin đơn hàng</span>
                        </h3>
                        <div className="chitiet-tour__content-para">
                          <h4>Xác Nhận:</h4>
                          <ul>
                            <li>
                              Bạn sẽ nhận được một email xác nhận chỗ trống trong thời gian 2 ngày
                              làm việc. Sau khi xác nhận, chúng tôi sẽ gửi voucher cho bạn qua
                              email.
                            </li>
                            <li>
                              Trường hợp không nhận được email từ chúng tôi, vui lòng kiểm tra thư
                              mục Spam hoặc báo cho chúng tôi qua email.
                            </li>
                          </ul>
                        </div>

                        <div className="chitiet-tour__content-para">
                          <h4>Lịch Trình:</h4>
                          <h5>Tour Sáng:</h5>
                          <ul>
                            <li>9:00 sáng đón khách ở khách sạn</li>
                            <li>9:30 sáng bắt đầu đi bộ leo núi 15 phút</li>
                            <li>9:45 sáng chụp ảnh</li>
                            <li>10:00 sáng - 11:30 sáng bơi</li>
                            <li>11:30 sáng xuống núi khoảng 15 phút</li>
                            <li>12:00 trưa Làng Chài Diura</li>
                            <li>12:30 trưa ăn trưa</li>
                            <li>2:00 chiều trả khách ở khách sạn</li>
                          </ul>
                          <h5>Tour Chiều:</h5>
                          <ul>
                            <li>12:00 trưa đón khách ở khách sạn</li>
                            <li>12:30 trưa ăn trưa</li>
                            <li>2:00 chiều bắt đầu đi bộ leo núi 15 phút</li>
                            <li>2:15 chiều chụp ảnh</li>
                            <li>2:30 chiều - 4:00 chiều bơi</li>
                            <li>4:00 chiều xuống núi khoảng 15 phút</li>
                            <li>4:30 chiều Làng Chài Diura</li>
                            <li>5:00 chiều trả khách ở khách sạn</li>
                          </ul>
                        </div>
                        <Divider />

                        <h3 className="title-description">
                          <span>Bình luận</span>
                        </h3>
                        <div className="chitiet-tour__info">
                          <span className="comment">5</span>
                          <Rate disabled defaultValue={5} />
                          <span className="rate">165 Đánh giá</span>
                        </div>
                        {renderListComment()}
                        <TextArea rows={4}/>
                        <div className="button btn-comment">
                          <Button className="btn-primary">Đăng bình luận</Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
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
