import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledActivePath";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledActivePath: React.SFC = props => {
  return <System.StyledActivePath {...props} style={style} />;
};

export const StyledActivePath = withHOC(InnerStyledActivePath);

StyledActivePath.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledActivePath, {});
