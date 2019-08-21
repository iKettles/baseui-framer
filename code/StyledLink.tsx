import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledLink";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledLink: React.SFC = props => {
  return <System.StyledLink {...props} style={style} />;
};

export const StyledLink = withHOC(InnerStyledLink);

StyledLink.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledLink, {});
