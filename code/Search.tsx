import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Search";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSearch: React.SFC = props => {
  return <System.Search {...props} style={style} />;
};

export const Search = withHOC(InnerSearch);

Search.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Search, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
