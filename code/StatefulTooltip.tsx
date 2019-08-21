import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulTooltip";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulTooltip: React.SFC = props => {
  return <System.StatefulTooltip {...props} style={style} />;
};

export const StatefulTooltip = withHOC(InnerStatefulTooltip);

StatefulTooltip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulTooltip, {
  accessibilityType: merge(controls.accessibilityType, {}),
  id: merge(controls.id, {}),
  ignoreBoundary: merge(controls.ignoreBoundary, {}),
  onMouseEnterDelay: merge(controls.onMouseEnterDelay, {}),
  onMouseLeaveDelay: merge(controls.onMouseLeaveDelay, {}),
  placement: merge(controls.placement, {}),
  showArrow: merge(controls.showArrow, {}),
  triggerType: merge(controls.triggerType, {}),
  animateOutTime: merge(controls.animateOutTime, {}),
  children: merge(controls.children, {}),
  content: merge(controls.content, {}),
  dismissOnClickOutside: merge(controls.dismissOnClickOutside, {}),
  dismissOnEsc: merge(controls.dismissOnEsc, {})
});
