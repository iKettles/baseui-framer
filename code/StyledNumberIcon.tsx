import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledNumberIcon";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledNumberIcon: React.SFC = props => {
  return <System.StyledNumberIcon {...props} style={style} />;
};

export const StyledNumberIcon = withHOC(InnerStyledNumberIcon);

StyledNumberIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledNumberIcon, {});
