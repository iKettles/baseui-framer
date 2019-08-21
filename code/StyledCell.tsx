import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledCell";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledCell: React.SFC = props => {
  return <System.StyledCell {...props} style={style} />;
};

export const StyledCell = withHOC(InnerStyledCell);

StyledCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledCell, {});
