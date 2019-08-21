import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/PinCode";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPinCode: React.SFC = props => {
  return <System.PinCode {...props} style={style} />;
};

export const PinCode = withHOC(InnerPinCode);

PinCode.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PinCode, {
  positive: merge(controls.positive, {}),
  startEnhancer: merge(controls.startEnhancer, {}),
  endEnhancer: merge(controls.endEnhancer, {}),
  adjoined: merge(controls.adjoined, {}),
  autoComplete: merge(controls.autoComplete, {}),
  autoFocus: merge(controls.autoFocus, {}),
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  id: merge(controls.id, {}),
  name: merge(controls.name, {}),
  placeholder: merge(controls.placeholder, {}),
  required: merge(controls.required, {}),
  size: merge(controls.size, {}),
  type: merge(controls.type, {}),
  rows: merge(controls.rows, {}),
  manageFocus: merge(controls.manageFocus, {})
});
