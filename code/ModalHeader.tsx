import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ModalHeader";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerModalHeader: React.SFC = props => {
  return <System.ModalHeader {...props} style={style} />;
};

export const ModalHeader = withHOC(InnerModalHeader);

ModalHeader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ModalHeader, {});
