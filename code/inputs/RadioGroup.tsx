import * as React from "react";
import * as System from "baseui/radio";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/RadioGroup";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRadioGroup: React.SFC = props => {
  return <System.RadioGroup {...props} style={style} />;
};

export const RadioGroup = withHOC(InnerRadioGroup);

RadioGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RadioGroup, {
  children: merge(controls.children, {}),
  value: merge(controls.value, {}),
  disabled: merge(controls.disabled, {}),
  required: merge(controls.required, {}),
  isError: merge(controls.isError, {}),
  autoFocus: merge(controls.autoFocus, {}),
  align: merge(controls.align, {}),
  name: merge(controls.name, {}),
  labelPlacement: merge(controls.labelPlacement, {})
});
