import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledTextarea";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledTextarea: React.SFC = props => {
  return <System.StyledTextarea {...props} style={style} />;
};

export const StyledTextarea = withHOC(InnerStyledTextarea);

StyledTextarea.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledTextarea, {});
