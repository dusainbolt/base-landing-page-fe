import React from "react";

import { Button, Col, Layout, Row, Tooltip } from "antd";
import { PhoneFilled, MailFilled, EnvironmentFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Search from "antd/lib/input/Search";
import IMG_FOOTER from "../../../common/image/4277831_upload_2018-4-2_14-40-43.png";
import IMG_PAY_FOOTER from "../../../common/image/footer.png";

const { Footer } = Layout;

export default function commonFooter() {
  return (
    <Footer className="footer" style={{ textAlign: "center" }}>
      <div className="footer__top">
        <div className="footer__top--icon">
          <Tooltip color="white" title="Đại chỉ: 29D Phạm Văn Bạch, Cầu Giấy, Hà Nội"><EnvironmentFilled className="icon-item" /></Tooltip>
          <Tooltip color="white" title="0123456789"><PhoneFilled className="icon-item" /></Tooltip>
          <Tooltip color="white" title="stravel@gmail.com"><MailFilled className="icon-item" /></Tooltip>
        </div>
        <div className="footer__top--right">
          <div className="footer__top--text">
            <span>Các deal du lịch giảm giá đến 60% sẽ được gửi đến inbox của bạn</span>
            <p className="footer__text">
              `Khi nhấp vào Đăng ký, bạn đồng ý với các <Link>Diều Khoản & Điều Kiện </Link>
              và <Link>Chính Sách Bảo Mật</Link> của chúng tôi`
            </p>
          </div>
          <div className="footer__top--contact">
            <Search
              placeholder="Nhập email"
              enterButton="Đăng ký"
              size="large"
              onSearch={value => console.log(value)}
            />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--wrapper">
          <Row>
            <Col span={5}>
              <p className="footer__text left small">© 2014-2020 STRAVEL. All Rights Reserved.</p>
              <img className="footer__bottom--img-copyright" alt="img_footer" src={IMG_FOOTER} />
            </Col>
            <Col className="footer__bottom--col" span={3}>
              <div className="footer__bottom--title">VỀ STRAVEL</div>
              <ul>
                <li className="footer__text left large">Về chúng tôi</li>
                <li className="footer__text left large">STRAVEL Blog</li>
                <li className="footer__text left large">Cơ hội nghề nghiệp</li>
              </ul>
            </Col>
            
            <Col className="footer__bottom--col" span={5}>
              <div className="footer__bottom--title">ĐỐI TÁC</div>
              <ul>
                <li className="footer__text left large">Đối tác đăng nhập</li>
                <li className="footer__text left large">Đối tác liên kết</li>
                <li className="footer__text left large">Chương trình cho người nổi tiếng</li>
                <li className="footer__text left large">Chương trình cho Đại lý</li>
                <li className="footer__text left large">Hợp tác của chúng tôi</li>

              </ul>
            </Col>
            <Col className="footer__bottom--col" span={6}>
              <div className="footer__bottom--title">ĐIỀU KHOẢN SỬ DỤNG</div>
              <ul>
                <li className="footer__text left large">Điều khoản sử dụng</li>
                <li className="footer__text left large">Quyền riêng tư</li>
                <li className="footer__text left large">Chính sách Cookie</li>
                <li className="footer__text left large">Chương trình thưởng phát hiện lỗi phần mềm</li>
                <li className="footer__text left large">Chính sách và quy định</li>
              </ul>
            </Col>
            <Col className="footer__bottom--col col-payment" span={5}>
              <Button ghost>Hỏi đáp STRAVEL</Button>
              <div className="footer__bottom--title payment">KÊNH THANH TOÁN</div>
              <img style={{width: "135px"}} src={IMG_PAY_FOOTER} alt="img"/>
            </Col>
          </Row>
        </div>
      </div>
    </Footer>
  );
}
