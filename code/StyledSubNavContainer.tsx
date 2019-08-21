import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledSubNavContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledSubNavContainer: React.SFC = props => {
  return <System.StyledSubNavContainer {...props} style={style} />;
};

export const StyledSubNavContainer = withHOC(InnerStyledSubNavContainer);

StyledSubNavContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledSubNavContainer, {});
