import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulPhoneInput";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulPhoneInput: React.SFC = props => {
  return <System.StatefulPhoneInput {...props} style={style} />;
};

export const StatefulPhoneInput = withHOC(InnerStatefulPhoneInput);

StatefulPhoneInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulPhoneInput, {});
