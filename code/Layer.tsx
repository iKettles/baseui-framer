import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Layer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLayer: React.SFC = props => {
  return <System.Layer {...props} style={style} />;
};

export const Layer = withHOC(InnerLayer);

Layer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Layer, {
  children: merge(controls.children, {}),
  index: merge(controls.index, {})
});
