import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledProfileBody";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledProfileBody: React.SFC = props => {
  return <System.StyledProfileBody {...props} style={style} />;
};

export const StyledProfileBody = withHOC(InnerStyledProfileBody);

StyledProfileBody.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledProfileBody, {});
