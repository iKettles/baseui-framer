import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Modal";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerModal: React.SFC = props => {
  return <System.Modal {...props} style={style} />;
};

export const Modal = withHOC(InnerModal);

Modal.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Modal, {
  animate: merge(controls.animate, {}),
  autofocus: merge(controls.autofocus, {}),
  children: merge(controls.children, {}),
  closeable: merge(controls.closeable, {}),
  isOpen: merge(controls.isOpen, {}),
  role: merge(controls.role, {}),
  size: merge(controls.size, {})
});
