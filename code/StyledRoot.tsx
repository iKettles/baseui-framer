import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledRoot";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledRoot: React.SFC = props => {
  return <System.StyledRoot {...props} style={style} />;
};

export const StyledRoot = withHOC(InnerStyledRoot);

StyledRoot.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledRoot, {});
