import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledArrow";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledArrow: React.SFC = props => {
  return <System.StyledArrow {...props} style={style} />;
};

export const StyledArrow = withHOC(InnerStyledArrow);

StyledArrow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledArrow, {});
