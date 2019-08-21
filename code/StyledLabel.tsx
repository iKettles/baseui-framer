import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledLabel";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledLabel: React.SFC = props => {
  return <System.StyledLabel {...props} style={style} />;
};

export const StyledLabel = withHOC(InnerStyledLabel);

StyledLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledLabel, {});
