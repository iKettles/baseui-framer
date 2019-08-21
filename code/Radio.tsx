import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Radio";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRadio: React.SFC = props => {
  return <System.Radio {...props} style={style} />;
};

export const Radio = withHOC(InnerRadio);

Radio.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Radio, {
  autoFocus: merge(controls.autoFocus, {}),
  checked: merge(controls.checked, {}),
  children: merge(controls.children, {}),
  description: merge(controls.description, {}),
  disabled: merge(controls.disabled, {}),
  isError: merge(controls.isError, {}),
  labelPlacement: merge(controls.labelPlacement, {}),
  name: merge(controls.name, {}),
  required: merge(controls.required, {}),
  value: merge(controls.value, {})
});
