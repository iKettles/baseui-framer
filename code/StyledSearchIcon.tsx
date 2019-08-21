import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledSearchIcon";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledSearchIcon: React.SFC = props => {
  return <System.StyledSearchIcon {...props} style={style} />;
};

export const StyledSearchIcon = withHOC(InnerStyledSearchIcon);

StyledSearchIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledSearchIcon, {});
