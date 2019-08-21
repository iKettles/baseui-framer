import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledSeparator";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledSeparator: React.SFC = props => {
  return <System.StyledSeparator {...props} style={style} />;
};

export const StyledSeparator = withHOC(InnerStyledSeparator);

StyledSeparator.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledSeparator, {});
