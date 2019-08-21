import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledToggleTrack";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledToggleTrack: React.SFC = props => {
  return <System.StyledToggleTrack {...props} style={style} />;
};

export const StyledToggleTrack = withHOC(InnerStyledToggleTrack);

StyledToggleTrack.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledToggleTrack, {});
