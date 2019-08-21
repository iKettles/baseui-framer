import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/LayersManager";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLayersManager: React.SFC = props => {
  return <System.LayersManager {...props} style={style} />;
};

export const LayersManager = withHOC(InnerLayersManager);

LayersManager.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(LayersManager, {
  children: merge(controls.children, {}),
  zIndex: merge(controls.zIndex, {})
});
