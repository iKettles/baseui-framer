import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledHead";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledHead: React.SFC = props => {
  return <System.StyledHead {...props} style={style} />;
};

export const StyledHead = withHOC(InnerStyledHead);

StyledHead.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledHead, {});
