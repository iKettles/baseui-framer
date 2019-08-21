import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledBar";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledBar: React.SFC = props => {
  return <System.StyledBar {...props} style={style} />;
};

export const StyledBar = withHOC(InnerStyledBar);

StyledBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledBar, {});
