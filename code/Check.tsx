import * as React from "react";
import * as System from "baseui/icon";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Check";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheck: React.SFC = props => {
  return <System.Check {...props} style={style} />;
};

export const Check = withHOC(InnerCheck);

Check.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Check, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
