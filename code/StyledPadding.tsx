import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledPadding";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledPadding: React.SFC = props => {
  return <System.StyledPadding {...props} style={style} />;
};

export const StyledPadding = withHOC(InnerStyledPadding);

StyledPadding.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledPadding, {});
