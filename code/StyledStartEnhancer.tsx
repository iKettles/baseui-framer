import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledStartEnhancer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledStartEnhancer: React.SFC = props => {
  return <System.StyledStartEnhancer {...props} style={style} />;
};

export const StyledStartEnhancer = withHOC(InnerStyledStartEnhancer);

StyledStartEnhancer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledStartEnhancer, {});
