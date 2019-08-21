import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/AspectRatioBox";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAspectRatioBox: React.SFC = props => {
  return <System.AspectRatioBox {...props} style={style} />;
};

export const AspectRatioBox = withHOC(InnerAspectRatioBox);

AspectRatioBox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AspectRatioBox, {
  aspectRatio: merge(controls.aspectRatio, {}),
  children: merge(controls.children, {}),
  src: merge(controls.src, {}),
  alignContent: merge(controls.alignContent, {}),
  alignItems: merge(controls.alignItems, {}),
  alignSelf: merge(controls.alignSelf, {}),
  flexDirection: merge(controls.flexDirection, {}),
  display: merge(controls.display, {}),
  flex: merge(controls.flex, {}),
  gridAutoFlow: merge(controls.gridAutoFlow, {}),
  gridColumnGap: merge(controls.gridColumnGap, {}),
  gridGap: merge(controls.gridGap, {}),
  gridRowGap: merge(controls.gridRowGap, {}),
  justifyContent: merge(controls.justifyContent, {}),
  justifyItems: merge(controls.justifyItems, {}),
  justifySelf: merge(controls.justifySelf, {}),
  position: merge(controls.position, {}),
  width: merge(controls.width, {}),
  minWidth: merge(controls.minWidth, {}),
  maxWidth: merge(controls.maxWidth, {}),
  height: merge(controls.height, {}),
  minHeight: merge(controls.minHeight, {}),
  maxHeight: merge(controls.maxHeight, {}),
  overflow: merge(controls.overflow, {}),
  margin: merge(controls.margin, {}),
  marginTop: merge(controls.marginTop, {}),
  marginRight: merge(controls.marginRight, {}),
  marginBottom: merge(controls.marginBottom, {}),
  marginLeft: merge(controls.marginLeft, {}),
  padding: merge(controls.padding, {}),
  paddingTop: merge(controls.paddingTop, {}),
  paddingRight: merge(controls.paddingRight, {}),
  paddingBottom: merge(controls.paddingBottom, {}),
  paddingLeft: merge(controls.paddingLeft, {}),
  left: merge(controls.left, {}),
  top: merge(controls.top, {}),
  right: merge(controls.right, {}),
  bottom: merge(controls.bottom, {})
});
