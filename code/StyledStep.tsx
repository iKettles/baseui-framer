import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledStep";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledStep: React.SFC = props => {
  return <System.StyledStep {...props} style={style} />;
};

export const StyledStep = withHOC(InnerStyledStep);

StyledStep.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledStep, {});
