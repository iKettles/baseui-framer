import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/FocusOnce";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFocusOnce: React.SFC = props => {
  return <System.FocusOnce {...props} style={style} />;
};

export const FocusOnce = withHOC(InnerFocusOnce);

FocusOnce.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FocusOnce, {
  children: merge(controls.children, {})
});
