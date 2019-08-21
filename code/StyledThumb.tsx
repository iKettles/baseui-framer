import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledThumb";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledThumb: React.SFC = props => {
  return <System.StyledThumb {...props} style={style} />;
};

export const StyledThumb = withHOC(InnerStyledThumb);

StyledThumb.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledThumb, {});
