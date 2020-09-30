import { Col, Row, Divider } from "antd";
import React from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import Logo from "../../common/image/LOGO.png";
import { XU_HUONG_MOi_NHAT } from "../../common/configLandingPage";
import IMG_BLOG_ITEM_1 from "../../common/image/BlogItem/item-1.webp";
import IMG_BLOG_ITEM_2 from "../../common/image/BlogItem/item-2.webp";
import IMG_BLOG_ITEM_3 from "../../common/image/BlogItem/item-3.webp";
import IMG_BLOG_ITEM_4 from "../../common/image/BlogItem/item-4.webp";
import IMG_BLOG_ITEM_5 from "../../common/image/BlogItem/item-5.webp";
import IMG_BLOG_ITEM_6 from "../../common/image/BlogItem/item-6.webp";
import CardBlogSideLeft from "../../components/CardBlogSideLeft";
import {
  FacebookFilled,
  WechatFilled,
  TwitterCircleFilled,
  GoogleCircleFilled,
} from "@ant-design/icons";
import CardBlogDoc from "../../components/CardBlogDoc";
import { getTypeTravel } from "../../utils";

function BlogChiTiet() {
  const renderContentPhuHop = () => {
    return XU_HUONG_MOi_NHAT.map(item => (
      <CardBlogSideLeft
        key={item.title}
        title={item.title}
        img={item.img}
        description={item.description}
      />
    ));
  };

  const renderContentMoiNhat = () => {
    return XU_HUONG_MOi_NHAT.map(item => (
      <Col key={item.title} span={6}>
        <CardBlogDoc
          title={item.title}
          className="card--content blog-cover"
          type={getTypeTravel(item.type)}
          img={item.img}
          description={item.description}
        />
      </Col>
    ));
  };

  return (
    <div className="home about blog blog-item">
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row blog-item">
            <Row gutter={[48, 16]}>
              <Col span={17}>
                <div className="blog-item__tag">
                  <div className="blog-item__tag-item">Phú Quốc</div>
                  <div className="blog-item__tag-item">Việt Nam</div>
                </div>
                <div className="blog-item__title-page">
                  Mê Mẩn 10 Bãi Biển Phú Quốc Đẹp Như Tranh Vẽ
                </div>
                <div className="blog-item__info">
                  <div className="site-info">
                    <img src={Logo} alt="logo-site" />
                    <div className="create">26/08/2020</div>
                  </div>
                  <div className="social-info">
                    <FacebookFilled className="facebook" />
                    <WechatFilled className="wechat" />
                    <TwitterCircleFilled className="twitter" />
                    <GoogleCircleFilled className="google" />
                  </div>
                </div>
                <div className="blog-item__image-page">
                  <img src={IMG_BLOG_ITEM_1} alt="img"/>
                </div>
                <div id="anchor-1" className="blog-item__title-page small">1. Bãi Sao Phú Quốc</div>
                <div className="blog-item__title-img-page">
                  <strong>
                    <em>
                      Biển Phú Quốc có thực sự lung linh như lời đồn? Cùng STRAVEL “zoom cận cảnh”
                      các bãi biển đẹp nổi tiếng ở Phú Quốc nhé.
                    </em>
                  </strong>
                </div>
                <p>
                  Con người thân thiện, ẩm thực địa phương đặc sắc hay chi phí du lịch rẻ chỉ là một
                  vài trong vô số lý do khiến hội nghiện xê dịch “bồ kết” Phú Quốc. Thú thật đi! Bạn
                  đã bao giờ ngẩn ngơ ngắm hoàng hôn đỏ rực trên bờ biển lồng lộng gió và ước rằng
                  thời gian ngừng trôi? Nếu cũng là người yêu thiên nhiên, bạn nhất định phải khám
                  phá hết 10 bãi biển Phú Quốc đẹp trong bài viết này đấy.{" "}
                </p>
                <div className="blog-item__image-page">
                  <img src={IMG_BLOG_ITEM_2} alt="img"/>
                </div>
                <p>
                  Khá nhiều du khách chọn Bãi Sao là một trong những bãi biển đẹp nhất ở Phú Quốc.
                  Điều này cũng khá dễ hiểu. Sở hữu đường bờ biển dài 7km cùng cát trắng mịn (khác
                  với loại cát màu vàng sáng thường gặp) và mặt nước trong vắt sắc xanh lam, Bãi Sao
                  Phú Quốc gợi nhớ về các thiên đường biển đảo nổi tiếng thế giới, ví dụ như Bali
                  hay Maldives.{" "}
                </p>
                <div className="blog-item__image-page">
                  <img src={IMG_BLOG_ITEM_3} alt="img"/>
                </div>
                <p>
                  "Săn" sao biển cũng là hoạt động được du khách yêu thích khi đến Bãi Sao Phú Quốc.
                </p>
                <p>
                  Cái tên “Bãi Sao” bắt nguồn từ một hiện tượng tự nhiên thú vị. Đó là vì mỗi tối,
                  khi màn đêm bao phủ lấy hòn đảo, hàng nghìn con sao biển bắt đầu “di dân” lên bờ,
                  tạo nên hình ảnh cực kỳ lạ mắt. Biển ở Bãi Sao được đánh giá là “lành”, ấm và ít
                  sóng. Bờ cát dưới biển thoai thoải, không có dốc hay sỏi đá nên rất phù hợp với
                  gia đình đi du lịch cùng trẻ nhỏ.{" "}
                </p>
                <p>
                  Du khách yêu thích vận động có thể thử thách bản thân bằng nhiều trò chơi thể thao
                  dưới nước như lướt sóng, lướt ván theo thuyền, đi thuyền chuối, lái cano máy….
                  #teamKlook cũng có thể thuê ghế dựa tắm nắm rồi thư thả thưởng thức hải sản tươi
                  sống được chế biến tại chỗ.
                </p>
                <div id="anchor-2" className="blog-item__title-page small">2. Bãi Trường Phú Quốc</div>
                <div className="blog-item__image-page">
                  <img src={IMG_BLOG_ITEM_4} alt="img"/>
                </div>
                <p>
                  Kéo dài từ Dinh Cậu đến Khoé Tàu Rũ, Bãi Trường rộng đến 20 héc ta và được người
                  dân địa phương ưu ái gọi là “linh hồn Phú Quốc”. Không sở hữu bờ cát trắng mộng
                  mơ, điều làm nên nét quyến rũ cho Bãi Trường là mặt biển trong vắt như gương có
                  khả năng… đổi màu. Tuỳ vào từng thời điểm trong ngày, biển Bãi Trường Phú Quốc sẽ
                  ôm ấp hay phản chiếu ánh nắng mặt trời, để chuyển sang màu xanh lam, hồng nhạt,
                  tím sẫm hay xanh ngọc.
                </p>
                <p>
                  Hàng nghìn cây dừa, cây dương chạy dọc theo bờ bờ biển càng khiến khung cảnh Bãi
                  Trường thêm phần bình dị và nên thơ. #teamKlook chắc chắn sẽ có được nhiều góc ảnh
                  “sâu đíp” tại đây. Một…hai…ba, tạo dáng thôi!
                </p>
                <div id="anchor-3" className="blog-item__title-page small">3. Làng Chài Rạch Vẹm</div>
                <div className="blog-item__image-page">
                  <img src={IMG_BLOG_ITEM_5} alt="img"/>
                </div>
                <p>
                  Cách trung tâm thị trấn Dương Đông khoảng 25Km, Làng Chài Rạch Vẹm là điểm đến lý
                  tưởng dành cho #teamKlook nào muốn kết hợp khám phá thiên nhiên và thưởng thức món
                  ngon Phú Quốc.
                </p>
                <p>
                  “Đặc sản” của Rạch Vẹm Phú Quốc chính là các nhà bè lênh đênh giữa biển. Đây là
                  nơi du khách có thể trải nghiệm cuộc sống thường nhật của người dân làng chài,
                  ngắm nhìn cảnh biển bao la và thưởng thức hải sản được đánh bắt / nuôi trồng ngay
                  tại bè. Một số nơi còn cung cấp dịch vụ câu cá, lặn biển ngắm san hô, rất phù hợp
                  với du khách muốn hoà mình cùng thiên nhiên.
                </p>
                <div className="blog-item__image-page">
                  <img src={IMG_BLOG_ITEM_6} alt="img"/>
                </div>
                <p>
                  Để đến Làng Chài Rạch Vẹm, bạn đi đường Hùng Vương qua cầu Cầu Cạn, rẽ phải ở ngã
                  tư rồi tiếp tục rẽ trái ở ngã ba; sau đó, chạy tiếp khoảng 5km nữa là đến. Đường
                  đi đến Làng Chài Rạch Vẹm đặc biệt lầy lội vào mùa mưa bão nên bạn chỉ nên vi vu
                  đến đây lúc thời tiết khô ráo thôi. Làng Chài Rạch Vẹm đẹp nhất là tầm cuối tháng
                  11 đến hết tháng 3 của năm kế tiếp. Bạn có thể thuê xe máy ở Phú Quốc hay thuê xe
                  hơi riêng trên Klook để hành trình du hí đến Rạch Vẹm tiện lợi hơn.
                </p>
                <div className="blog-item__tag">
                  <div className="blog-item__tag-item">Phú Quốc</div>
                  <div className="blog-item__tag-item">Việt Nam</div>
                </div>
                <div className="blog-item__title-page small">Chia sẻ ngay</div>

                <div className="social-info left">
                  <FacebookFilled className="facebook" />
                  <WechatFilled className="wechat" />
                  <TwitterCircleFilled className="twitter" />
                  <GoogleCircleFilled className="google" />
                </div>
              </Col>
              <Col span={7}>
                <h1 className="blog__title blog-item__title">Phù hợp với bạn</h1>
                <div className="blog__underline"></div>
                {renderContentPhuHop()}
              </Col>
            </Row>
            <Divider />
          </div>
        </FadeIn>
      </LazyLoad>
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row">
            <h1 className="blog__title blog-item__title">Blog mới nhất</h1>
            <Row className="blog-item__new" gutter={[16, 16]}>
              {renderContentMoiNhat()}
            </Row>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default BlogChiTiet;
