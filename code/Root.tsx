import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Root";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRoot: React.SFC = props => {
  return <System.Root {...props} style={style} />;
};

export const Root = withHOC(InnerRoot);

Root.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Root, {});
