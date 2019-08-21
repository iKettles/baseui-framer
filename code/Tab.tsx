import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Tab";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTab: React.SFC = props => {
  return <System.Tab {...props} style={style} />;
};

export const Tab = withHOC(InnerTab);

Tab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tab, {
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  active: merge(controls.active, {}),
  key: merge(controls.key, {}),
  title: merge(controls.title, {}),
  id: merge(controls.id, {})
});
