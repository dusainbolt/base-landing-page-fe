import { Col, Row, Tabs } from "antd";
import React, { useMemo, useRef } from "react";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import {
  HELP_CONTENT,
  HELP_PAYMENT,
  HELP_SETTING,
  HELP_HOAN_CANCEL,
  IMG_SIDE_ABOUT,
  HELP_DV,
} from "../../common/configLandingPage";
import CarouselPage from "../../components/CaraouselPage";
import IMG_DAU_TU_LIST from "../../common/image/dautudulich.png";
import {
  RightOutlined,
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Menu, Breadcrumb, Collapse } from "antd";
import { useState } from "react";
import { useEffect } from "react";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const listHelpContent = [HELP_DV, HELP_PAYMENT, HELP_HOAN_CANCEL, HELP_SETTING];

function About() {
  const [indexCollapse, setIndexCollapse] = useState(0);
  const [listContentHelp, setListContentHelp] = useState(listHelpContent[0]);
  const [indexMenu, setIndexMenu] = useState(1);
  const slide = useRef(null);

  const onClickPopularHelp = (indexMenu, indexCollapse) => {
    setIndexMenu(indexMenu);
    setIndexCollapse(indexCollapse);
    scrollToHelp();
  };

  const scrollToHelp = () => {
    if (slide && slide.current)
      slide.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const renderContentHelp = () => {
    return HELP_CONTENT.map((item, index)=> {
      return (
        <Col
          key={item.title}
          onClick={() => onClickPopularHelp(index + 1, 0)}
          className="help__row--col"
          span={6}>
          <img src={item.img} />
          <div className="help__info">
            <h3 className="help__info--title">{item.title}</h3>
            <span>{item.description}</span>
          </div>
        </Col>
      );
    });
  };

  const renderMenuHelp = () => {
    return HELP_CONTENT.map((item, index) => {
      return (
        <Menu.Item
          key={index + 1}
          className={index + 1 === indexMenu ? "ant-menu-item-selected" : ""}
          icon={<img className="help__icon-menu" src={item.img} />}>
          {item.title}
        </Menu.Item>
      );
    });
  };

  const onClickMenu = ({ key }) => {
    setIndexCollapse(0);
    setIndexMenu(key);
  };

  const onChangeCollapse = item => {
    setIndexCollapse(item[1]);
  };

  const renderContentHelpCollapse = useMemo(() => {
    return listContentHelp.map((item, index) => {
      return (
        <Collapse
          onChange={onChangeCollapse}
          key={index + 1}
          activeKey={[`${indexCollapse}`]}
          defaultActiveKey={[`${indexCollapse}`]}
          ghost>
          <Panel header={item.title} key={index + 1}>
            {item.description}
          </Panel>
        </Collapse>
      );
    });
  }, [indexCollapse, listContentHelp]);

  useEffect(() => {
    setListContentHelp(listHelpContent[indexMenu - 1]);
  }, [indexMenu]);

  return (
    <div className="home about help">
      <CarouselPage listImage={IMG_SIDE_ABOUT} className="home__carousel-page" />
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row help">
            <h1 className="help__title-popular">Các chủ đề phổ biến</h1>
            <div className="help__content-popular">
              <div onClick={() => onClickPopularHelp(2, 2)} className="help__content-popular--item">
                <div>Stravel thanh toán bằng đơn vị tiền tệ nào ?</div>
                <RightOutlined />
              </div>
              <div onClick={() => onClickPopularHelp(2, 1)} className="help__content-popular--item">
                <div>Làm sao tôi biết được chính xác dịch vụ bao nhiêu tiền ?</div>
                <RightOutlined />
              </div>
            </div>
          </div>
          <div className="home__row help__content">
            <Row className="help__row">{renderContentHelp()}</Row>
          </div>
        </FadeIn>
      </LazyLoad>
      <FadeIn delay={100} transitionDuration={500}>
        <div className="home__row help__content">
          <Row className="help__row">
            <Col span={6}>
              <Menu onClick={onClickMenu} style={{ width: 256 }} defaultOpenKeys={["sub1"]}>
                {renderMenuHelp()}
              </Menu>
            </Col>
            <Col span={18}>
              <Row ref={slide}>
                <Col span={24}>
                  <Breadcrumb separator=">">
                    <Breadcrumb.Item>Trợ giúp</Breadcrumb.Item>
                    <Breadcrumb.Item>{HELP_CONTENT[indexMenu]?.title}</Breadcrumb.Item>
                    <Breadcrumb.Item>
                      {listHelpContent[indexMenu - 1][indexCollapse - 1]?.title}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col span={24}>
                  <Collapse
                    onChange={onChangeCollapse}
                    activeKey={[`${indexCollapse}`]}
                    defaultActiveKey={[`${indexCollapse}`]}
                    ghost>
                    {renderContentHelpCollapse}
                  </Collapse>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </FadeIn>
    </div>
  );
}

export default About;
