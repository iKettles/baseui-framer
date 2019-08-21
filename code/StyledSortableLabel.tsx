import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledSortableLabel";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledSortableLabel: React.SFC = props => {
  return <System.StyledSortableLabel {...props} style={style} />;
};

export const StyledSortableLabel = withHOC(InnerStyledSortableLabel);

StyledSortableLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledSortableLabel, {});
