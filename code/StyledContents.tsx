import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledContents";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledContents: React.SFC = props => {
  return <System.StyledContents {...props} style={style} />;
};

export const StyledContents = withHOC(InnerStyledContents);

StyledContents.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledContents, {});
