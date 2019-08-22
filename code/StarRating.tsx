import * as React from "react";
import * as System from "baseui/rating";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StarRating";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStarRating: React.SFC = ({ value, ...props }) => {
  const [currentValue, setValue] = React.useState(value);
  return (
    <System.StarRating
      value={currentValue}
      onChange={({ value }) => setValue(value)}
      {...props}
    />
  );
};

export const StarRating = withHOC(InnerStarRating);

StarRating.defaultProps = {
  width: 150,
  height: 25
};

addPropertyControls(StarRating, {
  value: merge(controls.value, { min: 0, max: 100, defaultValue: 2 }),
  numItems: merge(controls.numItems, {
    min: 0,
    max: 100,
    defaultValue: 5
  })
});
