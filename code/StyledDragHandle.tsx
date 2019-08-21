import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledDragHandle";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledDragHandle: React.SFC = props => {
  return <System.StyledDragHandle {...props} style={style} />;
};

export const StyledDragHandle = withHOC(InnerStyledDragHandle);

StyledDragHandle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledDragHandle, {});
