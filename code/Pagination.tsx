import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Pagination";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPagination: React.SFC = props => {
  return <System.Pagination {...props} style={style} />;
};

export const Pagination = withHOC(InnerPagination);

Pagination.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Pagination, {
  numPages: merge(controls.numPages, {}),
  currentPage: merge(controls.currentPage, {})
});
