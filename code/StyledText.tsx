import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledText";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledText: React.SFC = props => {
  return <System.StyledText {...props} style={style} />;
};

export const StyledText = withHOC(InnerStyledText);

StyledText.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledText, {});
