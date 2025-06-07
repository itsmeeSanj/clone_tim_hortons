import { Space } from "antd";
import React from "react";
import { Link } from "react-router";

const MenuItems = [
  {
    label: "Menu",
  },
  {
    label: "Tims for Good",
  },
  {
    label: "Tims Catering",
  },
  {
    label: "TimShop",
  },
  {
    label: "More",
    children: [
      {
        label: "Coffee Mugs",
      },
      {
        label: "Gift Cards",
      },
      {
        label: "T-Shirts",
      },
    ],
  },
];

function Header() {
  return (
    <>
      <Space>
        {MenuItems.map((menu, index) => (
          <Link to={menu.label} key={index}>
            {menu.label}
          </Link>
        ))}
      </Space>
    </>
  );
}
export default Header;
