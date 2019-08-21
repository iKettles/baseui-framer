import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/CloseIconSvg";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCloseIconSvg: React.SFC = props => {
  return <System.CloseIconSvg {...props} style={style} />;
};

export const CloseIconSvg = withHOC(InnerCloseIconSvg);

CloseIconSvg.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CloseIconSvg, {});
