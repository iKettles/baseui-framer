import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledInputContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledInputContainer: React.SFC = props => {
  return <System.StyledInputContainer {...props} style={style} />;
};

export const StyledInputContainer = withHOC(InnerStyledInputContainer);

StyledInputContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledInputContainer, {});
