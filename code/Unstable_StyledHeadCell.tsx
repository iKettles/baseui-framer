import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Unstable_StyledHeadCell";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerUnstable_StyledHeadCell: React.SFC = props => {
  return <System.Unstable_StyledHeadCell {...props} style={style} />;
};

export const Unstable_StyledHeadCell = withHOC(InnerUnstable_StyledHeadCell);

Unstable_StyledHeadCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Unstable_StyledHeadCell, {});
