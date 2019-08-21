import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulInput";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulInput: React.SFC = props => {
  return <System.StatefulInput {...props} style={style} />;
};

export const StatefulInput = withHOC(InnerStatefulInput);

StatefulInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulInput, {
  startEnhancer: merge(controls.startEnhancer, {}),
  endEnhancer: merge(controls.endEnhancer, {}),
  adjoined: merge(controls.adjoined, {}),
  autoComplete: merge(controls.autoComplete, {}),
  autoFocus: merge(controls.autoFocus, {}),
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  id: merge(controls.id, {}),
  name: merge(controls.name, {}),
  placeholder: merge(controls.placeholder, {}),
  required: merge(controls.required, {}),
  size: merge(controls.size, {}),
  type: merge(controls.type, {}),
  value: merge(controls.value, {}),
  rows: merge(controls.rows, {}),
  children: merge(controls.children, {})
});
