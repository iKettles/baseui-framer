import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledContentTail";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledContentTail: React.SFC = props => {
  return <System.StyledContentTail {...props} style={style} />;
};

export const StyledContentTail = withHOC(InnerStyledContentTail);

StyledContentTail.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledContentTail, {});
