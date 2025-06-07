import { Button, Space, DatePicker } from "antd";

function Header() {
  return (
    <Space>
      <DatePicker />
      <Button type='primary'>Primary Button</Button>
    </Space>
  );
}
export default Header;
