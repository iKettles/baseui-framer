import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledInitials";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledInitials: React.SFC = props => {
  return <System.StyledInitials {...props} style={style} />;
};

export const StyledInitials = withHOC(InnerStyledInitials);

StyledInitials.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledInitials, {});
