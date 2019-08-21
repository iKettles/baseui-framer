import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledFilterContent";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledFilterContent: React.SFC = props => {
  return <System.StyledFilterContent {...props} style={style} />;
};

export const StyledFilterContent = withHOC(InnerStyledFilterContent);

StyledFilterContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledFilterContent, {});
