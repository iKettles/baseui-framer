import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TimezonePicker";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTimezonePicker: React.SFC = props => {
  return <System.TimezonePicker {...props} style={style} />;
};

export const TimezonePicker = withHOC(InnerTimezonePicker);

TimezonePicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TimezonePicker, {
  disabled: merge(controls.disabled, {}),
  positive: merge(controls.positive, {}),
  error: merge(controls.error, {}),
  value: merge(controls.value, {})
});
