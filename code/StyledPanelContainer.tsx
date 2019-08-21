import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledPanelContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledPanelContainer: React.SFC = props => {
  return <System.StyledPanelContainer {...props} style={style} />;
};

export const StyledPanelContainer = withHOC(InnerStyledPanelContainer);

StyledPanelContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledPanelContainer, {});
