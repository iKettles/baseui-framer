import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/EmoticonRating";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerEmoticonRating: React.SFC = props => {
  return <System.EmoticonRating {...props} style={style} />;
};

export const EmoticonRating = withHOC(InnerEmoticonRating);

EmoticonRating.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(EmoticonRating, {
  value: merge(controls.value, {})
});
