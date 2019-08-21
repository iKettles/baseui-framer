import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulPanel";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulPanel: React.SFC = props => {
  return <System.StatefulPanel {...props} style={style} />;
};

export const StatefulPanel = withHOC(InnerStatefulPanel);

StatefulPanel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulPanel, {
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  key: merge(controls.key, {}),
  title: merge(controls.title, {}),
  renderPanelContent: merge(controls.renderPanelContent, {})
});
