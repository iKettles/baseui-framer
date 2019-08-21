import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/WEEKDAYS";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerWEEKDAYS: React.SFC = props => {
  return <System.WEEKDAYS {...props} style={style} />;
};

export const WEEKDAYS = withHOC(InnerWEEKDAYS);

WEEKDAYS.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(WEEKDAYS, {});
