import { Col, Divider, Row, Empty, Button } from "antd";
import React from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import { DICH_VU, IMG_SIDE_ABOUT } from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";
import AvatarDefault from "../../common/image/avatar.png";
import Avatar from "antd/lib/avatar/avatar";
import {
  CreditCardOutlined,
  SolutionOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  DashboardOutlined,
  UserOutlined,
  HeartOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { onRedirect } from "../../utils";
import CardContent from "../../components/CardContent";
function Account() {

  const renderContentDV = () => {
    return DICH_VU.map((item, index) => {
      return (
        <Col key={index} span={6}>
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

  return (
    <div className="home about ">
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row account">
            <Row gutter={[24, 16]}>
              <Col span={6}>
                <div className="account__menu">
                  <div className="account__menu--info">
                    <Avatar size={90} src={AvatarDefault} />
                    <h4>Người dùng Stravel</h4>
                    <p>Chỉnh sửa</p>
                  </div>
                  <Divider className="divider-menu" />
                  <div className="account__menu--item-wrapper">
                    <div className="account__menu--item">
                      <SolutionOutlined />
                      Mã ưu đãi
                      <div className="right-item">+</div>
                    </div>
                    <div className="account__menu--item">
                      <CreditCardOutlined />
                      Credits
                      <div className="right-item">0</div>
                    </div>
                  </div>
                  <Divider className="divider-menu" />
                  <div className="account__menu--item-wrapper">
                    <div className="account__menu--item">
                      <ShoppingCartOutlined />
                      Đơn hàng
                    </div>
                    <div className="account__menu--item">
                      <StarOutlined />
                      Đánh giá
                    </div>
                    <div className="account__menu--item">
                      <DashboardOutlined />
                      Quản lý phương thức thanh toán
                    </div>
                    <div className="account__menu--item">
                      <UserOutlined />
                      Quản lý thông tin khách
                    </div>
                    <div className="account__menu--item">
                      <HeartOutlined />
                      Yêu thích
                    </div>
                  </div>
                  <Divider className="divider-menu" />
                  <div className="account__menu--item-wrapper">
                    <div className="account__menu--item">
                      <HomeOutlined />
                      Các cách quản lý đăng nhập
                    </div>
                    <div className="account__menu--item">
                      <SettingOutlined />
                      Cài đặt
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={18}>
                <div className="account__content-wrapper">
                  <h3 className="title-description">
                    Đơn hàng <span className="small">Xem đơn hàng của tôi</span>
                  </h3>
                  <Empty description={false} />
                  <p className="des-empty">
                    Hiện chưa có hoạt động nào!Hãy xem lịch sử đơn hàng của bạn bên dưới: Khám phá
                    các hoạt động du lịch đặc sắc và đặt ngay
                  </p>
                  <div className="button">
                    <Button onClick={() => onRedirect("/tour")} className="btn-primary">
                      Xem thêm
                    </Button>
                  </div>
                  <h3 className="title-description item">DỊCH VỤ ĐƯỢC YÊU THÍCH</h3>
                  <Row gutter={[8, 16]}>
                    {renderContentDV()}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default Account;
