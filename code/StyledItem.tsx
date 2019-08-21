import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledItem";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledItem: React.SFC = props => {
  return <System.StyledItem {...props} style={style} />;
};

export const StyledItem = withHOC(InnerStyledItem);

StyledItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledItem, {});
