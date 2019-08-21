import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledTitle";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledTitle: React.SFC = props => {
  return <System.StyledTitle {...props} style={style} />;
};

export const StyledTitle = withHOC(InnerStyledTitle);

StyledTitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledTitle, {});
