import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TimePicker";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTimePicker: React.SFC = props => {
  return <System.TimePicker {...props} style={style} />;
};

export const TimePicker = withHOC(InnerTimePicker);

TimePicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TimePicker, {
  format: merge(controls.format, {}),
  positive: merge(controls.positive, {}),
  error: merge(controls.error, {}),
  creatable: merge(controls.creatable, {}),
  disabled: merge(controls.disabled, {}),
  step: merge(controls.step, {})
});
