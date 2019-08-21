import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulTabs";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulTabs: React.SFC = props => {
  return <System.StatefulTabs {...props} style={style} />;
};

export const StatefulTabs = withHOC(InnerStatefulTabs);

StatefulTabs.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulTabs, {
  children: merge(controls.children, {}),
  activeKey: merge(controls.activeKey, {}),
  disabled: merge(controls.disabled, {}),
  renderAll: merge(controls.renderAll, {}),
  orientation: merge(controls.orientation, {})
});
