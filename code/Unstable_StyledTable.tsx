import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Unstable_StyledTable";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerUnstable_StyledTable: React.SFC = props => {
  return <System.Unstable_StyledTable {...props} style={style} />;
};

export const Unstable_StyledTable = withHOC(InnerUnstable_StyledTable);

Unstable_StyledTable.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Unstable_StyledTable, {});
