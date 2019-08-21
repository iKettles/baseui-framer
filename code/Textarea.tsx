import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Textarea";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTextarea: React.SFC = props => {
  return <System.Textarea {...props} style={style} />;
};

export const Textarea = withHOC(InnerTextarea);

Textarea.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Textarea, {
  rows: merge(controls.rows, {}),
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
  value: merge(controls.value, {})
});
