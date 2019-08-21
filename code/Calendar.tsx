import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Calendar";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCalendar: React.SFC = props => {
  return <System.Calendar {...props} style={style} />;
};

export const Calendar = withHOC(InnerCalendar);

Calendar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Calendar, {
  autoFocusCalendar: merge(controls.autoFocusCalendar, {}),
  quickSelect: merge(controls.quickSelect, {}),
  range: merge(controls.range, {}),
  monthsShown: merge(controls.monthsShown, {}),
  orientation: merge(controls.orientation, {}),
  peekNextMonth: merge(controls.peekNextMonth, {}),
  timeSelectStart: merge(controls.timeSelectStart, {}),
  timeSelectEnd: merge(controls.timeSelectEnd, {}),
  trapTabbing: merge(controls.trapTabbing, {})
});
