import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StarRating";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStarRating: React.SFC = props => {
  return <System.StarRating {...props} style={style} />;
};

export const StarRating = withHOC(InnerStarRating);

StarRating.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StarRating, {
  value: merge(controls.value, {}),
  numItems: merge(controls.numItems, {})
});
