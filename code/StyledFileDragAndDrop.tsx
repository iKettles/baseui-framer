import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledFileDragAndDrop";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledFileDragAndDrop: React.SFC = props => {
  return <System.StyledFileDragAndDrop {...props} style={style} />;
};

export const StyledFileDragAndDrop = withHOC(InnerStyledFileDragAndDrop);

StyledFileDragAndDrop.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledFileDragAndDrop, {});
