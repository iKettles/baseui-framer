import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Tabs";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTabs: React.SFC = props => {
  return <System.Tabs {...props} style={style} />;
};

export const Tabs = withHOC(InnerTabs);

Tabs.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tabs, {
  children: merge(controls.children, {}),
  activeKey: merge(controls.activeKey, {}),
  disabled: merge(controls.disabled, {}),
  renderAll: merge(controls.renderAll, {}),
  orientation: merge(controls.orientation, {})
});
