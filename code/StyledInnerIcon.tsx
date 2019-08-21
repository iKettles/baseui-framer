import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledInnerIcon";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledInnerIcon: React.SFC = props => {
  return <System.StyledInnerIcon {...props} style={style} />;
};

export const StyledInnerIcon = withHOC(InnerStyledInnerIcon);

StyledInnerIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledInnerIcon, {});
