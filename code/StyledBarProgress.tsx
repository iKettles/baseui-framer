import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledBarProgress";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledBarProgress: React.SFC = props => {
  return <System.StyledBarProgress {...props} style={style} />;
};

export const StyledBarProgress = withHOC(InnerStyledBarProgress);

StyledBarProgress.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledBarProgress, {});
