import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledRadioMarkOuter";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledRadioMarkOuter: React.SFC = props => {
  return <System.StyledRadioMarkOuter {...props} style={style} />;
};

export const StyledRadioMarkOuter = withHOC(InnerStyledRadioMarkOuter);

StyledRadioMarkOuter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledRadioMarkOuter, {});
