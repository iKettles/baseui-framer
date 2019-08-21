import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledStar";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledStar: React.SFC = props => {
  return <System.StyledStar {...props} style={style} />;
};

export const StyledStar = withHOC(InnerStyledStar);

StyledStar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledStar, {});
