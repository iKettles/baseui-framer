import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/NumberedStep";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNumberedStep: React.SFC = props => {
  return <System.NumberedStep {...props} style={style} />;
};

export const NumberedStep = withHOC(InnerNumberedStep);

NumberedStep.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NumberedStep, {
  title: merge(controls.title, {}),
  isCompleted: merge(controls.isCompleted, {}),
  isActive: merge(controls.isActive, {}),
  isLast: merge(controls.isLast, {}),
  children: merge(controls.children, {}),
  step: merge(controls.step, {})
});
