import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/CheckIndeterminate";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheckIndeterminate: React.SFC = props => {
  return <System.CheckIndeterminate {...props} style={style} />;
};

export const CheckIndeterminate = withHOC(InnerCheckIndeterminate);

CheckIndeterminate.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CheckIndeterminate, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
