import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledClearIcon";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledClearIcon: React.SFC = props => {
  return <System.StyledClearIcon {...props} style={style} />;
};

export const StyledClearIcon = withHOC(InnerStyledClearIcon);

StyledClearIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledClearIcon, {});
