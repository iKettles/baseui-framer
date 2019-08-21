import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Delete";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDelete: React.SFC = props => {
  return <System.Delete {...props} style={style} />;
};

export const Delete = withHOC(InnerDelete);

Delete.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Delete, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
