import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledRadioGroupRoot";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledRadioGroupRoot: React.SFC = props => {
  return <System.StyledRadioGroupRoot {...props} style={style} />;
};

export const StyledRadioGroupRoot = withHOC(InnerStyledRadioGroupRoot);

StyledRadioGroupRoot.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledRadioGroupRoot, {});
