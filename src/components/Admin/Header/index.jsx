import React, { useState, useMemo } from "react";
import LogoHeader from "../../../common/image/LOGO.png";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MenuTop } from "../../../common/configLandingPage";
import { onRedirect } from "../../../utils";
import ModalCommon from "../../Modal";
import { Input } from 'antd';

const { Search } = Input;


function CommonHeader({ toggleMenu, refHeader }) {

  const [visibleSearch, setVisibleSearch] = useState(false);

  const renderMenuTop = () => {
    return MenuTop.map((item, index) => {
      return (
        <li className={index === MenuTop.length - 1 && "0"} key={index}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      );
    });
  };

  const openModalSearch = () => {
    setVisibleSearch(true);
  };

  const onCloseModal = () => {
    setVisibleSearch(false);
  };

  const renderContentSearch = () => {
    return (
      <div>
        <Search placeholder="Nhập từ khóa tìm kiếm" onSearch={value => onRedirect("/blog")} enterButton />
      </div>
    );
  };

  const renderModalSearch = useMemo(()=>{
      return (
        <ModalCommon visible={visibleSearch} onCancel={onCloseModal}  content={renderContentSearch()} title="Tìm kiếm" />
      )
  },[visibleSearch]);

  return (
    <div className="header" id="headerWeb">
      <img className="header__logo" src={LogoHeader} onClick={() => onRedirect("/")} alt="logo" />
      <div className="header__menu">
        <ul>{renderMenuTop()}</ul>
      </div>
      <div className="header__icon">
        <div className="header__icon-wrapper">
          <SearchOutlined onClick={() => openModalSearch()} className="header__icon--item" />
          <ShoppingCartOutlined onClick={() => onRedirect("/shoppingcart")} className="header__icon--item" />
          <UserOutlined onClick={() => onRedirect("/account")}  className="header__icon--item" />
        </div>
      </div>
      {renderModalSearch}
    </div>
  );
}

export default CommonHeader;
