import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledNavItemContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledNavItemContainer: React.SFC = props => {
  return <System.StyledNavItemContainer {...props} style={style} />;
};

export const StyledNavItemContainer = withHOC(InnerStyledNavItemContainer);

StyledNavItemContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledNavItemContainer, {});
