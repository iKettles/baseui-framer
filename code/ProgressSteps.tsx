import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ProgressSteps";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerProgressSteps: React.SFC = props => {
  return <System.ProgressSteps {...props} style={style} />;
};

export const ProgressSteps = withHOC(InnerProgressSteps);

ProgressSteps.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ProgressSteps, {
  children: merge(controls.children, {}),
  current: merge(controls.current, {})
});
