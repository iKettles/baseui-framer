import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Tooltip";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTooltip: React.SFC = props => {
  return <System.Tooltip {...props} style={style} />;
};

export const Tooltip = withHOC(InnerTooltip);

Tooltip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tooltip, {
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
  isOpen: merge(controls.isOpen, {})
});
