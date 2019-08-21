import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Tag";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTag: React.SFC = props => {
  return <System.Tag {...props} style={style} />;
};

export const Tag = withHOC(InnerTag);

Tag.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tag, {
  closeable: merge(controls.closeable, {}),
  disabled: merge(controls.disabled, {}),
  isFocused: merge(controls.isFocused, {}),
  isHovered: merge(controls.isHovered, {}),
  kind: merge(controls.kind, {}),
  variant: merge(controls.variant, {}),
  children: merge(controls.children, {}),
  color: merge(controls.color, {})
});
