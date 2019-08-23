import * as System from "baseui/datepicker";
import { addPropertyControls } from "framer";
import * as React from "react";
import { controls, merge } from "../generated/Datepicker";
import { useManagedState } from "../utils/useManagedState";
import { withHOC } from "../withHOC";

const InnerDatepicker: React.SFC<any> = ({ date, ...props }) => {
  const [value, setValue] = useManagedState(date);
  return (
    <System.Datepicker
      {...props}
      value={value}
      onChange={e => setValue(e.date)}
    />
  );
};

export const Datepicker = withHOC(InnerDatepicker);

const defaultFormat = "yyyy-mm-dd";
Datepicker.defaultProps = {
  width: 150,
  height: 50,
  formatString: defaultFormat
};

addPropertyControls(Datepicker, {
  monthsShown: merge(controls.monthsShown, {
    defaultValue: 1,
    min: 1,
    max: 5,
    displayStepper: true
  }),
  orientation: merge(controls.orientation, {}),
  trapTabbing: merge(controls.trapTabbing, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, {
    defaultValue: defaultFormat
  }),
  formatString: merge(controls.formatString, { defaultValue: defaultFormat })
});
