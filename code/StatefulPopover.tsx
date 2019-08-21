import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulPopover";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulPopover: React.SFC = props => {
  return <System.StatefulPopover {...props} style={style} />;
};

export const StatefulPopover = withHOC(InnerStatefulPopover);

StatefulPopover.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulPopover, {
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
