import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledTrack";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledTrack: React.SFC = props => {
  return <System.StyledTrack {...props} style={style} />;
};

export const StyledTrack = withHOC(InnerStyledTrack);

StyledTrack.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledTrack, {});
