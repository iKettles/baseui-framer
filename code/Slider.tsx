import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Slider";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSlider: React.SFC = props => {
  return <System.Slider {...props} style={style} />;
};

export const Slider = withHOC(InnerSlider);

Slider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Slider, {
  min: merge(controls.min, {}),
  max: merge(controls.max, {}),
  step: merge(controls.step, {}),
  disabled: merge(controls.disabled, {})
});
