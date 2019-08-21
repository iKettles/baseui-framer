import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledSelectArrow";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledSelectArrow: React.SFC = props => {
  return <System.StyledSelectArrow {...props} style={style} />;
};

export const StyledSelectArrow = withHOC(InnerStyledSelectArrow);

StyledSelectArrow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledSelectArrow, {});
