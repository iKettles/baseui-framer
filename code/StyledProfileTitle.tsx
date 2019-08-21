import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledProfileTitle";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledProfileTitle: React.SFC = props => {
  return <System.StyledProfileTitle {...props} style={style} />;
};

export const StyledProfileTitle = withHOC(InnerStyledProfileTitle);

StyledProfileTitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledProfileTitle, {});
