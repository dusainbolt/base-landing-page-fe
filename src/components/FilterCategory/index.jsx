import React from "react";
import { Button, Tree } from "antd";
import { TREE_FILTER_ADDRESS } from "../../common/configFilter";
import { DownOutlined } from "@ant-design/icons";
function FilterAddress({ className = "" }) {
  
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  return (
    <div className={`search__filter ${className}`}>
      <h5 className="search-left-title">Lọc theo điểm đến</h5>
      <Tree
        checkable
        onSelect={onSelect}
        onCheck={onCheck}
        switcherIcon={<DownOutlined />}
        treeData={TREE_FILTER_ADDRESS}
      />
      <div className="button">
        <Button className="primary no-bg">Xem thêm</Button>
      </div>
    </div>
  );
}

export default FilterAddress;