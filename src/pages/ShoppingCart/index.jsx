import React from "react";
import { Table, InputNumber, Button } from "antd";
import FadeIn from "react-fade-in";
import LazyLoad from "react-lazyload";
import IMG_DV_1 from "../../common/image/DichVuPhoBien/dich_vu_2.jpg";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { formatCommaNumber } from "../../utils";
import CountDown from "../../components/ModalConfirm";
function ShoppingCart() {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    onSelect: (record, selected, selectedRows) => {},
    onSelectAll: (selected, selectedRows, changeRows) => {},
  };

  const columns = [
    {
      title: "Tất cả",
      dataIndex: "imgUrl",
      key: "name",
      width: "135px",
      render: imgUrl => <img className="shopping-cart__img" src={imgUrl} />,
    },
    {
      title: "Thông tin dịch vụ",
      key: "age",
      width: "25%",
      render: item => (
        <div className="shopping-cart__info">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ),
    },
    {
      title: "Ngày",
      width: "18%",
      render: item => (
        <div className="shopping-cart__date">
          <span>{item.date}</span>
          <p>(Giờ địa phương)</p>
        </div>
      ),
    },
    {
      title: "Số lượng",
      width: "23%",
      render: item => (
        <div className="shopping-cart__total">
          <p className="type">Người lớn</p>
          <InputNumber min={1} max={10} defaultValue={item.total} />
        </div>
      ),
    },
    {
      title: "Tổng tiền",
      dataIndex: "money",
      width: "17%",
      key: "money",
      render: item => "₫ " + formatCommaNumber(item),
    },
  ];

  const data = [
    {
      key: 1,
      imgUrl: IMG_DV_1,
      title: "Tham Quan Tangier Cả Ngày Bằng Phà Với Hướng Dẫn Viên",
      description: "Loại gói dịch vụ: Marbella Departure (AGPTNGFD)",
      date: "21/10/2020 07:15",
      total: 2,
      money: 3242000,
    },
    {
      key: 2,
      imgUrl: IMG_DV_1,
      title: "Tham Quan Tangier Cả Ngày Bằng Phà Với Hướng Dẫn Viên",
      description: "Loại gói dịch vụ: Marbella Departure (AGPTNGFD)",
      date: "25/10/2020 07:15",
      total: 3,
      money: 1617000,
    },
  ];

  return (
    <div className="home about tour">
      <LazyLoad height={800} throttle={400}>
        <FadeIn delay={100} transitionDuration={500}>
          <div className="home__row shopping-cart">
            <h1 className="home__row--title">Giỏ hàng</h1>
            <Table
              columns={columns}
              pagination={false}
              rowSelection={{ ...rowSelection }}
              dataSource={data}
            />
            <div className="shopping-cart__total-wrapper">
              <div>
                <DeleteOutlined /> Huỷ
              </div>
              <div>
                <EditOutlined /> Chỉnh sửa
              </div>
              <div className="total">{"₫ " + formatCommaNumber(data[0].money + data[1].money)}</div>
            </div>
            <div className="shopping-cart__total-bottom">
              <div className="wrapper">
                <span>
                  1 Tổng các dịch vụ : <strong>₫ 2,233,626</strong>
                  <p>
                    Nhận <b>74</b> credit cho đơn hàng này
                  </p>
                </span>
                <Button onClick={() => CountDown()} className="btn-primary">
                  Thanh toán ngay
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </LazyLoad>
    </div>
  );
}

export default ShoppingCart;
