import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/SortableHeadCell";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSortableHeadCell: React.SFC = props => {
  return <System.SortableHeadCell {...props} style={style} />;
};

export const SortableHeadCell = withHOC(InnerSortableHeadCell);

SortableHeadCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SortableHeadCell, {
  children: merge(controls.children, {}),
  direction: merge(controls.direction, {}),
  disabled: merge(controls.disabled, {}),
  title: merge(controls.title, {})
});
