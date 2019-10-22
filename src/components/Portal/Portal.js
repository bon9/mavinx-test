import React from "react";
import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return <span className="">{createPortal(children, target)}</span>;
};

export default Portal;
