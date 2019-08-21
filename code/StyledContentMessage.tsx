import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledContentMessage";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledContentMessage: React.SFC = props => {
  return <System.StyledContentMessage {...props} style={style} />;
};

export const StyledContentMessage = withHOC(InnerStyledContentMessage);

StyledContentMessage.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledContentMessage, {});
