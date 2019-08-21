import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledNumberStep";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledNumberStep: React.SFC = props => {
  return <System.StyledNumberStep {...props} style={style} />;
};

export const StyledNumberStep = withHOC(InnerStyledNumberStep);

StyledNumberStep.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledNumberStep, {});
