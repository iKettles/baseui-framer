import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledAvatar";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledAvatar: React.SFC = props => {
  return <System.StyledAvatar {...props} style={style} />;
};

export const StyledAvatar = withHOC(InnerStyledAvatar);

StyledAvatar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledAvatar, {});
