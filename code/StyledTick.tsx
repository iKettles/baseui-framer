import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledTick";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledTick: React.SFC = props => {
  return <System.StyledTick {...props} style={style} />;
};

export const StyledTick = withHOC(InnerStyledTick);

StyledTick.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledTick, {});
