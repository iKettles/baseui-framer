import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledFilterFooter";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledFilterFooter: React.SFC = props => {
  return <System.StyledFilterFooter {...props} style={style} />;
};

export const StyledFilterFooter = withHOC(InnerStyledFilterFooter);

StyledFilterFooter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledFilterFooter, {});
