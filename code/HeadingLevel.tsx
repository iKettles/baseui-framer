import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/HeadingLevel";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerHeadingLevel: React.SFC = props => {
  return <System.HeadingLevel {...props} style={style} />;
};

export const HeadingLevel = withHOC(InnerHeadingLevel);

HeadingLevel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(HeadingLevel, {
  children: merge(controls.children, {})
});
