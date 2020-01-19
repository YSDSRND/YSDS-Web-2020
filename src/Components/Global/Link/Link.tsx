import React from "react";
import { Link as RouterLink } from "react-router-dom";

export type LinkProps = {
  to: string;
};
const Link: React.FC<LinkProps> = ({ to, children }) => {
  const url = new URL(to);
  const path = url.pathname;
  return <RouterLink to={path}>{children}</RouterLink>;
};

export default Link;
