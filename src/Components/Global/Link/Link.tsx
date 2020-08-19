import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export type LinkProps = {
  to: string;
  onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined
  className?: string
};
const Link: React.FC<LinkProps> = ({ to, children, onClick , className}) => {
  let pathName = '';
  if (to) {
    const url = new URL(to);
    pathName = url.pathname;
  }

  return <RouterLink onClick={onClick} to={pathName} className={className}>{children}</RouterLink>;
};

export default Link;
