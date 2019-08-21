import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Body";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBody: React.SFC = props => {
  return <System.Body {...props} style={style} />;
};

export const Body = withHOC(InnerBody);

Body.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Body, {});
