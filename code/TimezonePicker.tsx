import * as React from "react";
import * as System from "baseui/datepicker";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TimezonePicker";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTimezonePicker: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = React.useState(value);

  return (
    <System.TimezonePicker
      onChange={e => {
        console.log(e), setValue(e.id);
      }}
      {...props}
      value={currentValue}
    />
  );
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
  value: merge(controls.value, { defaultValue: "Pacific/Honolulu" })
});
