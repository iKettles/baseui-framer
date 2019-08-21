import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledBaseButton";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledBaseButton: React.SFC = props => {
  return <System.StyledBaseButton {...props} style={style} />;
};

export const StyledBaseButton = withHOC(InnerStyledBaseButton);

StyledBaseButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledBaseButton, {});
