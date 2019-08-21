import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledIcon";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledIcon: React.SFC = props => {
  return <System.StyledIcon {...props} style={style} />;
};

export const StyledIcon = withHOC(InnerStyledIcon);

StyledIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledIcon, {});
