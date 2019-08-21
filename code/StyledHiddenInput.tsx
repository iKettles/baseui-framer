import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledHiddenInput";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledHiddenInput: React.SFC = props => {
  return <System.StyledHiddenInput {...props} style={style} />;
};

export const StyledHiddenInput = withHOC(InnerStyledHiddenInput);

StyledHiddenInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledHiddenInput, {});
