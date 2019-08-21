import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Plus";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPlus: React.SFC = props => {
  return <System.Plus {...props} style={style} />;
};

export const Plus = withHOC(InnerPlus);

Plus.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Plus, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
