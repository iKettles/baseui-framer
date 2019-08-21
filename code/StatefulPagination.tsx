import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulPagination";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulPagination: React.SFC = props => {
  return <System.StatefulPagination {...props} style={style} />;
};

export const StatefulPagination = withHOC(InnerStatefulPagination);

StatefulPagination.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulPagination, {
  numPages: merge(controls.numPages, {})
});
