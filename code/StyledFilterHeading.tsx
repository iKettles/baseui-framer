import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledFilterHeading";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledFilterHeading: React.SFC = props => {
  return <System.StyledFilterHeading {...props} style={style} />;
};

export const StyledFilterHeading = withHOC(InnerStyledFilterHeading);

StyledFilterHeading.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledFilterHeading, {});
