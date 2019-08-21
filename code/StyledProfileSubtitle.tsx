import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledProfileSubtitle";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledProfileSubtitle: React.SFC = props => {
  return <System.StyledProfileSubtitle {...props} style={style} />;
};

export const StyledProfileSubtitle = withHOC(InnerStyledProfileSubtitle);

StyledProfileSubtitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledProfileSubtitle, {});
