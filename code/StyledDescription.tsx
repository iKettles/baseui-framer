import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledDescription";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledDescription: React.SFC = props => {
  return <System.StyledDescription {...props} style={style} />;
};

export const StyledDescription = withHOC(InnerStyledDescription);

StyledDescription.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledDescription, {});
