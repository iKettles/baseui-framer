import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Unstable_StyledBodyCell";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerUnstable_StyledBodyCell: React.SFC = props => {
  return <System.Unstable_StyledBodyCell {...props} style={style} />;
};

export const Unstable_StyledBodyCell = withHOC(InnerUnstable_StyledBodyCell);

Unstable_StyledBodyCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Unstable_StyledBodyCell, {});
