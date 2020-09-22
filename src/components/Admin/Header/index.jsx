import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LogoHeader from "../../../common/image/LOGO.png";
import { useMemo } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
// import Icon1 from "../../../common/image/du-lich-sapa-thang-11-1-1000x540.svg";
// import Icon2 from "../../../common/image/iconfinder_multimedia-07_2849829.svg";
// import Icon3 from "../../../common/image/iconfinder_multimedia-12_2849824.svg";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MenuTop } from "../../../common/configLandingPage";

function CommonHeader({ toggleMenu, refHeader }) {
  const { t } = useTranslation();

  const renderMenuTop = () => {
    return MenuTop.reverse().map((item, index)=>{
      return (
        <li key={index}>
        <Link to={item.link}>{item.name}</Link>
      </li>
      );
    });
  };

  return (
    <div className="header" ref={refHeader}>
      <img className="header__logo" src={LogoHeader} alt="logo" />
      <div className="header__menu">
        <ul>
          {renderMenuTop()}
        </ul>
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
