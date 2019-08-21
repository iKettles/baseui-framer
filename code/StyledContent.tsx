import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledContent";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledContent: React.SFC = props => {
  return <System.StyledContent {...props} style={style} />;
};

export const StyledContent = withHOC(InnerStyledContent);

StyledContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledContent, {});
