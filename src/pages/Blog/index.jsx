import { Button, Col, Row, Divider } from "antd";
import React from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import {
  IMG_SIDE_ABOUT,
  XU_HUONG_MOi_NHAT,
  LQ_BLOG,
  BLOG_POPULAR,
} from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";
import CardBlogDoc from "../../components/CardBlogDoc";
import IMG_MIEN_BAC from "../../common/image/DichVuPhoBien/dich_vu_2.jpg";
import CardBlogNgang from "../../components/CardBlogNgang";
import CardBlogTrend from "../../components/CardBlogTrend";
import { getTypeTravel, onRedirect } from "../../utils";

function Blog() {
  const renderXuHuong = () => {
    return XU_HUONG_MOi_NHAT.map((item, index) => (
      <div onClick={() => onRedirect("/blog-chi-tiet")} key={index} className="home__row--col-content">
        <CardBlogNgang
          title={item.title}
          description={item.description}
          type={getTypeTravel(item.type)}
          className="card--content"
          img={item.img}
        />
        <Divider />
      </div>
    ));
  };

  const renderNoiBatBlog = () => {
    return LQ_BLOG.map((item, index) => (
      <Col onClick={() => onRedirect("/blog-chi-tiet")} key={index} span={8}>
        <div className="home__row--col-content">
          <CardBlogDoc
            title={item.title}
            description={item.description}
            type={getTypeTravel(item.type)}
            className="card--content"
            img={item.img}
          />
        </div>
      </Col>
    ));
  };

  const renderBlogPopular = () => {
    return BLOG_POPULAR.map((item, index) => (
      <div onClick={() => onRedirect("/blog-chi-tiet")} key={index} className="home__row--col-content">
        <CardBlogTrend title={item.title} description={item.description} count={index + 1} />
      </div>
    ));
  };

  return (
    <div className="home about blog">
      <CarouselPage listImage={IMG_SIDE_ABOUT} className="home__carousel-page" />
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row">
            <h1 className="blog__title">Nội dung liên quan</h1>
            <div className="blog__underline"></div>
            <Row gutter={[16, 16]}>{renderNoiBatBlog()}</Row>
          </div>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row blog-body">
            <Row gutter={[16, 16]}>
              <Col span={16}>
                <h1 className="blog__title">Xu hướng du lịch mới nhất</h1>
                <div className="blog__underline"></div>
                {renderXuHuong()}
                <div className="button">
                  <Button onClick={() => onRedirect("/blog")} className="primary no-bg">
                    Xem thêm
                  </Button>
                </div>
              </Col>
              <Col span={8}>
                <h1 className="blog__title">Phổ biến nhất</h1>
                <div className="blog__underline"></div>
                {renderBlogPopular()}
              </Col>
            </Row>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default Blog;
