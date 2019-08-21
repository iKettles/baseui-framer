import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledLoadingSpinnerContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledLoadingSpinnerContainer: React.SFC = props => {
  return <System.StyledLoadingSpinnerContainer {...props} style={style} />;
};

export const StyledLoadingSpinnerContainer = withHOC(
  InnerStyledLoadingSpinnerContainer
);

StyledLoadingSpinnerContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledLoadingSpinnerContainer, {});
