import * as System from "baseui/datepicker";
import { addPropertyControls } from "framer";
import * as React from "react";
import { controls, merge } from "../generated/TimezonePicker";
import { withHOC } from "../withHOC";

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
  width: 350,
  height: 50
};

addPropertyControls(TimezonePicker, {
  disabled: merge(controls.disabled, {}),
  positive: merge(controls.positive, {}),
  error: merge(controls.error, {}),
  value: merge(controls.value, { defaultValue: "Pacific/Honolulu" })
});
