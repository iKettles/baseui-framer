import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Avatar";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAvatar: React.SFC = props => {
  return <System.Avatar {...props} style={style} />;
};

export const Avatar = withHOC(InnerAvatar);

Avatar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Avatar, {
  name: merge(controls.name, {}),
  size: merge(controls.size, {}),
  src: merge(controls.src, {})
});
