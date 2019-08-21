import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulList";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulList: React.SFC = props => {
  return <System.StatefulList {...props} style={style} />;
};

export const StatefulList = withHOC(InnerStatefulList);

StatefulList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulList, {
  removable: merge(controls.removable, {}),
  removableByMove: merge(controls.removableByMove, {})
});
