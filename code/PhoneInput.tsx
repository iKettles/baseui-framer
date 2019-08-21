import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/PhoneInput";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPhoneInput: React.SFC = props => {
  return <System.PhoneInput {...props} style={style} />;
};

export const PhoneInput = withHOC(InnerPhoneInput);

PhoneInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PhoneInput, {
  text: merge(controls.text, {}),
  size: merge(controls.size, {}),
  maxDropdownHeight: merge(controls.maxDropdownHeight, {}),
  maxDropdownWidth: merge(controls.maxDropdownWidth, {})
});
