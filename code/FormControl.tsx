import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/FormControl";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFormControl: React.SFC = props => {
  return <System.FormControl {...props} style={style} />;
};

export const FormControl = withHOC(InnerFormControl);

FormControl.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormControl, {
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  label: merge(controls.label, {}),
  caption: merge(controls.caption, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {})
});
