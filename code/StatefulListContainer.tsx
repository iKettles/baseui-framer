import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulListContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulListContainer: React.SFC = props => {
  return <System.StatefulListContainer {...props} style={style} />;
};

export const StatefulListContainer = withHOC(InnerStatefulListContainer);

StatefulListContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulListContainer, {
  removable: merge(controls.removable, {}),
  removableByMove: merge(controls.removableByMove, {}),
  children: merge(controls.children, {})
});
