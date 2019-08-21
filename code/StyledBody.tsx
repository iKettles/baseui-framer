import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledBody";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledBody: React.SFC = props => {
  return <System.StyledBody {...props} style={style} />;
};

export const StyledBody = withHOC(InnerStyledBody);

StyledBody.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledBody, {});
