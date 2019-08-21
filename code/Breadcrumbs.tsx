import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Breadcrumbs";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBreadcrumbs: React.SFC = props => {
  return <System.Breadcrumbs {...props} style={style} />;
};

export const Breadcrumbs = withHOC(InnerBreadcrumbs);

Breadcrumbs.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Breadcrumbs, {
  children: merge(controls.children, {}),
  ariaLabel: merge(controls.ariaLabel, {})
});
