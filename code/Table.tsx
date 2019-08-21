import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Table";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTable: React.SFC = props => {
  return <System.Table {...props} style={style} />;
};

export const Table = withHOC(InnerTable);

Table.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Table, {
  horizontalScrollWidth: merge(controls.horizontalScrollWidth, {}),
  isLoading: merge(controls.isLoading, {})
});
