import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledTickBar";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledTickBar: React.SFC = props => {
  return <System.StyledTickBar {...props} style={style} />;
};

export const StyledTickBar = withHOC(InnerStyledTickBar);

StyledTickBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledTickBar, {});
