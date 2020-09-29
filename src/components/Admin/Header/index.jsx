import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LogoHeader from "../../../common/image/LOGO.png";
import { useMemo } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MenuTop } from "../../../common/configLandingPage";
import { onRedirect } from "../../../utils";

function CommonHeader({ toggleMenu, refHeader }) {
  const { t } = useTranslation();

  const renderMenuTop = () => {
    return MenuTop.map((item, index) => {
      return (
        <li className={index === MenuTop.length - 1 && "0"} key={index}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      );
    });
  };

  return (
    <div className="header" id="headerWeb">
      <img className="header__logo" src={LogoHeader} onClick={() => onRedirect("/")} alt="logo" />
      <div className="header__menu">
        <ul>{renderMenuTop()}</ul>
      </div>
      <div className="header__icon">
        <div className="header__icon-wrapper">
          <SearchOutlined className="header__icon--item" />
          <ShoppingCartOutlined className="header__icon--item" />
          <UserOutlined className="header__icon--item" />
        </div>
      </div>
    </div>
  );
}

export default CommonHeader;
