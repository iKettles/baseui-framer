import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledMaxLabel";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledMaxLabel: React.SFC = props => {
  return <System.StyledMaxLabel {...props} style={style} />;
};

export const StyledMaxLabel = withHOC(InnerStyledMaxLabel);

StyledMaxLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledMaxLabel, {});
