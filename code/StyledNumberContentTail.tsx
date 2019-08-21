import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledNumberContentTail";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledNumberContentTail: React.SFC = props => {
  return <System.StyledNumberContentTail {...props} style={style} />;
};

export const StyledNumberContentTail = withHOC(InnerStyledNumberContentTail);

StyledNumberContentTail.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledNumberContentTail, {});
