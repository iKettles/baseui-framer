import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Flag";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFlag: React.SFC = props => {
  return <System.Flag {...props} style={style} />;
};

export const Flag = withHOC(InnerFlag);

Flag.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Flag, {
  width: merge(controls.width, {})
});
