import { Button } from "antd";

export default function Buttons({
  children,
  type = "default",
  size = "middle",
  shape = "default",
  color = "default",
  block = false,
  ...rest
}) {
  return (
    <Button
      type={type}
      size={size}
      shape={shape}
      block={block}
      color={color}
      style={{ boxShadow: "none" }}
      {...rest}
    >
      {children}
    </Button>
  );
}
