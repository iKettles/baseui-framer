import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulSlider";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulSlider: React.SFC = props => {
  return <System.StatefulSlider {...props} style={style} />;
};

export const StatefulSlider = withHOC(InnerStatefulSlider);

StatefulSlider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulSlider, {
  min: merge(controls.min, {}),
  max: merge(controls.max, {}),
  step: merge(controls.step, {})
});
