import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledInputEnhancer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledInputEnhancer: React.SFC = props => {
  return <System.StyledInputEnhancer {...props} style={style} />;
};

export const StyledInputEnhancer = withHOC(InnerStyledInputEnhancer);

StyledInputEnhancer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledInputEnhancer, {});
