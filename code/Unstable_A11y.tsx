import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Unstable_A11y";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerUnstable_A11y: React.SFC = props => {
  return <System.Unstable_A11y {...props} style={style} />;
};

export const Unstable_A11y = withHOC(InnerUnstable_A11y);

Unstable_A11y.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Unstable_A11y, {});
