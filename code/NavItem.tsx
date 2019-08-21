import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/NavItem";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNavItem: React.SFC = props => {
  return <System.NavItem {...props} style={style} />;
};

export const NavItem = withHOC(InnerNavItem);

NavItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NavItem, {});
