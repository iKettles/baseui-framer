import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulRadioGroup";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulRadioGroup: React.SFC = props => {
  return <System.StatefulRadioGroup {...props} style={style} />;
};

export const StatefulRadioGroup = withHOC(InnerStatefulRadioGroup);

StatefulRadioGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulRadioGroup, {
  children: merge(controls.children, {}),
  autoFocus: merge(controls.autoFocus, {}),
  name: merge(controls.name, {})
});
