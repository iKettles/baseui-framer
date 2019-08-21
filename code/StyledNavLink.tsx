import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledNavLink";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledNavLink: React.SFC = props => {
  return <System.StyledNavLink {...props} style={style} />;
};

export const StyledNavLink = withHOC(InnerStyledNavLink);

StyledNavLink.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledNavLink, {});
