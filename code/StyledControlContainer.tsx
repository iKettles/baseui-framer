import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledControlContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledControlContainer: React.SFC = props => {
  return <System.StyledControlContainer {...props} style={style} />;
};

export const StyledControlContainer = withHOC(InnerStyledControlContainer);

StyledControlContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledControlContainer, {});
