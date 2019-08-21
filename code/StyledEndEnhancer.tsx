import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledEndEnhancer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledEndEnhancer: React.SFC = props => {
  return <System.StyledEndEnhancer {...props} style={style} />;
};

export const StyledEndEnhancer = withHOC(InnerStyledEndEnhancer);

StyledEndEnhancer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledEndEnhancer, {});
