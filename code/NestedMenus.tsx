import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/NestedMenus";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNestedMenus: React.SFC = props => {
  return <System.NestedMenus {...props} style={style} />;
};

export const NestedMenus = withHOC(InnerNestedMenus);

NestedMenus.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NestedMenus, {
  children: merge(controls.children, {})
});
