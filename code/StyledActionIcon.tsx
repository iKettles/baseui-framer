import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledActionIcon";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledActionIcon: React.SFC = props => {
  return <System.StyledActionIcon {...props} style={style} />;
};

export const StyledActionIcon = withHOC(InnerStyledActionIcon);

StyledActionIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledActionIcon, {});
