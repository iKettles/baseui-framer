import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledRadioMarkInner";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledRadioMarkInner: React.SFC = props => {
  return <System.StyledRadioMarkInner {...props} style={style} />;
};

export const StyledRadioMarkInner = withHOC(InnerStyledRadioMarkInner);

StyledRadioMarkInner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledRadioMarkInner, {});
