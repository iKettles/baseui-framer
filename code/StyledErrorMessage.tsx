import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledErrorMessage";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledErrorMessage: React.SFC = props => {
  return <System.StyledErrorMessage {...props} style={style} />;
};

export const StyledErrorMessage = withHOC(InnerStyledErrorMessage);

StyledErrorMessage.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledErrorMessage, {});
