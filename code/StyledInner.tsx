import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledInner";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledInner: React.SFC = props => {
  return <System.StyledInner {...props} style={style} />;
};

export const StyledInner = withHOC(InnerStyledInner);

StyledInner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledInner, {});
