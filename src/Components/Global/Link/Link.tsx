import React from "react";
import { Link as RouterLink } from "react-router-dom";

export type LinkProps = {
  to: string;
  onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined
};
const Link: React.FC<LinkProps> = ({ to, children, onClick }) => {
  const url = new URL(to);
  const path = url.pathname;
  return <RouterLink onClick={onClick} to={path}>{children}</RouterLink>;
};

export default Link;
