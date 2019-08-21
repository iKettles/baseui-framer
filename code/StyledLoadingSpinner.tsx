import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledLoadingSpinner";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledLoadingSpinner: React.SFC = props => {
  return <System.StyledLoadingSpinner {...props} style={style} />;
};

export const StyledLoadingSpinner = withHOC(InnerStyledLoadingSpinner);

StyledLoadingSpinner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledLoadingSpinner, {});
