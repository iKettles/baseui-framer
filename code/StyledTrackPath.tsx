import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledTrackPath";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledTrackPath: React.SFC = props => {
  return <System.StyledTrackPath {...props} style={style} />;
};

export const StyledTrackPath = withHOC(InnerStyledTrackPath);

StyledTrackPath.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledTrackPath, {});
