import React, { useState } from "react";
import {
  HomeFilled,
  AppstoreFilled,
  GlobalOutlined,
  CaretDownFilled,
  AppstoreOutlined,
  BookFilled,
} from "@ant-design/icons";
import FadeIn from "react-fade-in";

import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { listLangage } from "../../../common/configLandingPage";
import LogoHeader from "../../../common/image/LogoSidebar.png";
import SideBar from "../SlideBar";
import { useTranslation } from "react-i18next";

let localLang = localStorage.getItem("lang");
const lang = localLang ? localLang : "vn";

function CommonHeader() {

  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const onShowSidebar = () => {
    setVisible(!visible);
  };

  const renderMenuLanguage = (t, lang) => {
    return (
      <Menu>
        {listLangage.map(value => (
          <Menu.Item
            key={value}
            className={checkActiveLanguage(lang, value)}
            onClick={changeLocales(value)}
          >
            {t(`header.language_${value}`)}
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  const checkActiveLanguage = (lang, value) => {
    if (lang === value) return "header__active-language";
    return "";
  };

  const changeLocales = type => () => {
    i18n.changeLanguage(type);
    localStorage.setItem("lang", type);
  };

  return (
    <FadeIn transitionDuration={1000}>
      <div className="header__web">
        <img src={LogoHeader} width="140" height="55" alt="avatar" />
        <div className="header__web--display-web">
          <div className="header__web--menu">
            <ul>
              <li>
                <Link className="home-item-menu-active" to="/">
                  <HomeFilled className="header__web--menu--icon" />
                  {t("header.menu_home")}
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <BookFilled className="header__web--menu--icon" />
                  {t("header.menu_blog")}
                </Link>
              </li>
              <li>
                <Link to="/bautroixanh">
                  <AppstoreFilled className="header__web--menu--icon" />
                  {t("header.menu_app")}
                </Link>
              </li>
              <li>
                <Dropdown
                  overlayClassName="header__language"
                  trigger="click"
                  overlay={renderMenuLanguage(t, lang)}
                >
                  <p className="ant-dropdown-link dropdown-language">
                    <GlobalOutlined />
                    {lang === "vn" ? t("header.language_vn") : t("header.language_en")}
                    <CaretDownFilled />
                  </p>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__web--display-mobie">
          <AppstoreOutlined className="header__web--display-mobie--icon" onClick={onShowSidebar} />
          <SideBar receiveVisible={onShowSidebar} visible={visible} />
        </div>
      </div>
    </FadeIn>
  );
}

export default CommonHeader;
