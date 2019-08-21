import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/List";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerList: React.SFC = props => {
  return <System.List {...props} style={style} />;
};

export const List = withHOC(InnerList);

List.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(List, {
  removable: merge(controls.removable, {}),
  removableByMove: merge(controls.removableByMove, {})
});
