import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledInnerTrack";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledInnerTrack: React.SFC = props => {
  return <System.StyledInnerTrack {...props} style={style} />;
};

export const StyledInnerTrack = withHOC(InnerStyledInnerTrack);

StyledInnerTrack.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledInnerTrack, {});
