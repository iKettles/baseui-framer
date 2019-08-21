import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledHeadCell";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledHeadCell: React.SFC = props => {
  return <System.StyledHeadCell {...props} style={style} />;
};

export const StyledHeadCell = withHOC(InnerStyledHeadCell);

StyledHeadCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledHeadCell, {});
