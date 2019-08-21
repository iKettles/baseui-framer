import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledOptionContent";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledOptionContent: React.SFC = props => {
  return <System.StyledOptionContent {...props} style={style} />;
};

export const StyledOptionContent = withHOC(InnerStyledOptionContent);

StyledOptionContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledOptionContent, {});
