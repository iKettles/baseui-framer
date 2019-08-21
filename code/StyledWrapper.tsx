import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledWrapper";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledWrapper: React.SFC = props => {
  return <System.StyledWrapper {...props} style={style} />;
};

export const StyledWrapper = withHOC(InnerStyledWrapper);

StyledWrapper.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledWrapper, {});
