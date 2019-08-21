import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/OptionProfile";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerOptionProfile: React.SFC = props => {
  return <System.OptionProfile {...props} style={style} />;
};

export const OptionProfile = withHOC(InnerOptionProfile);

OptionProfile.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(OptionProfile, {});
