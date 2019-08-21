import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/SingleValue";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSingleValue: React.SFC = props => {
  return <System.SingleValue {...props} style={style} />;
};

export const SingleValue = withHOC(InnerSingleValue);

SingleValue.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SingleValue, {});
