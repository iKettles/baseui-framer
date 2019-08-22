import * as React from "react";
import * as System from "baseui/datepicker";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Datepicker";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDatepicker: React.SFC = props => {
  const [value, setValue] = React.useState(null);
  const onChange = React.useCallback(({ date }) => setValue(date), []);
  return <System.Datepicker {...props} style={style} value={value} onChange={onChange} />;
};

export const Datepicker = withHOC(InnerDatepicker);

Datepicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Datepicker, {
  autoFocusCalendar: merge(controls.autoFocusCalendar, {}),
  quickSelect: merge(controls.quickSelect, {}),
  range: merge(controls.range, {}),
  monthsShown: merge(controls.monthsShown, {}),
  orientation: merge(controls.orientation, {}),
  peekNextMonth: merge(controls.peekNextMonth, {}),
  timeSelectStart: merge(controls.timeSelectStart, {}),
  timeSelectEnd: merge(controls.timeSelectEnd, {}),
  trapTabbing: merge(controls.trapTabbing, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, {}),
  required: merge(controls.required, {}),
  formatString: merge(controls.formatString, {})
});
