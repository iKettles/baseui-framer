import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/DeleteAlt";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDeleteAlt: React.SFC = props => {
  return <System.DeleteAlt {...props} style={style} />;
};

export const DeleteAlt = withHOC(InnerDeleteAlt);

DeleteAlt.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DeleteAlt, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
