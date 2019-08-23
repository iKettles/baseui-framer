import * as System from "baseui/datepicker";
import { addPropertyControls } from "framer";
import * as React from "react";
import { controls, merge } from "../generated/TimePicker";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState";

const InnerTimePicker: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = useManagedState(value);

  return (
    <System.TimePicker
      value={currentValue}
      onChange={e => setValue(e)}
      {...props}
    />
  );
};

export const TimePicker = withHOC(InnerTimePicker);

TimePicker.defaultProps = {
  width: 350,
  height: 50
};

addPropertyControls(TimePicker, {
  format: merge(controls.format, { defaultValue: "12" }),
  positive: merge(controls.positive, { defaultValue: false }),
  error: merge(controls.error, { defaultValue: false }),
  disabled: merge(controls.disabled, { defaultValue: false })
});
