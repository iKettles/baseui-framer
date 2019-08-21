import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledClose";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledClose: React.SFC = props => {
  return <System.StyledClose {...props} style={style} />;
};

export const StyledClose = withHOC(InnerStyledClose);

StyledClose.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledClose, {});
