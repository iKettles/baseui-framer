import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledDropdown";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledDropdown: React.SFC = props => {
  return <System.StyledDropdown {...props} style={style} />;
};

export const StyledDropdown = withHOC(InnerStyledDropdown);

StyledDropdown.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledDropdown, {});
