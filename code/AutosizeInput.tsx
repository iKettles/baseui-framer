import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/AutosizeInput";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAutosizeInput: React.SFC = props => {
  return <System.AutosizeInput {...props} style={style} />;
};

export const AutosizeInput = withHOC(InnerAutosizeInput);

AutosizeInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AutosizeInput, {
  value: merge(controls.value, {}),
  defaultValue: merge(controls.defaultValue, {})
});
