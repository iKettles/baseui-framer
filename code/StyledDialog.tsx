import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledDialog";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledDialog: React.SFC = props => {
  return <System.StyledDialog {...props} style={style} />;
};

export const StyledDialog = withHOC(InnerStyledDialog);

StyledDialog.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledDialog, {});
