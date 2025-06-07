import { Space } from "antd";
import React from "react";

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
          <p key={index}>{menu.label}</p>
        ))}
      </Space>
    </>
  );
}
export default Header;
