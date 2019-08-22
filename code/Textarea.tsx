import * as React from "react";
import * as System from "baseui/textarea";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Textarea";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTextarea: React.SFC<any> = props => {
  return <System.Textarea {...props} style={style} />;
};

export const Textarea = withHOC(InnerTextarea);

Textarea.defaultProps = {
  width: 300,
  height: 150
};

addPropertyControls(Textarea, {
  rows: merge(controls.rows, { defaultValue: 5, min: 0, max: 100 }),
  clearable: merge(controls.clearable, { defaultValue: false }),
  disabled: merge(controls.disabled, { defaultValue: false }),
  error: merge(controls.error, { defaultValue: false }),
  positive: merge(controls.positive, { defaultValue: false }),
  placeholder: merge(controls.placeholder, { defaultValue: "Placeholder!" }),
  size: merge(controls.size, { defaultValue: "default" }),
  value: merge(controls.value, { defaultValue: "" })
});
