import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulContainer: React.SFC = props => {
  return <System.StatefulContainer {...props} style={style} />;
};

export const StatefulContainer = withHOC(InnerStatefulContainer);

StatefulContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulContainer, {
  ariaLabel: merge(controls.ariaLabel, {}),
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  mode: merge(controls.mode, {}),
  selected: merge(controls.selected, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {})
});
