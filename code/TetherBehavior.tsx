import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TetherBehavior";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTetherBehavior: React.SFC = props => {
  return <System.TetherBehavior {...props} style={style} />;
};

export const TetherBehavior = withHOC(InnerTetherBehavior);

TetherBehavior.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TetherBehavior, {
  children: merge(controls.children, {}),
  placement: merge(controls.placement, {})
});
