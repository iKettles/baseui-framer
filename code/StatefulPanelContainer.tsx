import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulPanelContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulPanelContainer: React.SFC = props => {
  return <System.StatefulPanelContainer {...props} style={style} />;
};

export const StatefulPanelContainer = withHOC(InnerStatefulPanelContainer);

StatefulPanelContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulPanelContainer, {
  children: merge(controls.children, {})
});
