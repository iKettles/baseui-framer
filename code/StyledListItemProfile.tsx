import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledListItemProfile";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledListItemProfile: React.SFC = props => {
  return <System.StyledListItemProfile {...props} style={style} />;
};

export const StyledListItemProfile = withHOC(InnerStyledListItemProfile);

StyledListItemProfile.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledListItemProfile, {});
