import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledDialogContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledDialogContainer: React.SFC = props => {
  return <System.StyledDialogContainer {...props} style={style} />;
};

export const StyledDialogContainer = withHOC(InnerStyledDialogContainer);

StyledDialogContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledDialogContainer, {});
