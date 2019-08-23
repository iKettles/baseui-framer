import * as React from "react";
import * as System from "baseui/rating";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/StarRating";
import { withHOC } from "../withHOC";

const InnerEmoticonRating: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = React.useState(value);
  return (
    <System.EmoticonRating
      value={currentValue}
      onChange={({ value }) => setValue(value)}
      {...props}
    />
  );
};

export const EmoticonRating = withHOC(InnerEmoticonRating);

EmoticonRating.defaultProps = {
  width: 260,
  height: 25
};

addPropertyControls(EmoticonRating, {
  value: merge(controls.value, { min: 0, max: 100, defaultValue: 2 })
});
