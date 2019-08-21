import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledNavigationItem";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledNavigationItem: React.SFC = props => {
  return <System.StyledNavigationItem {...props} style={style} />;
};

export const StyledNavigationItem = withHOC(InnerStyledNavigationItem);

StyledNavigationItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledNavigationItem, {});
