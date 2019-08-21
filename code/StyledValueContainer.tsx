import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledValueContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledValueContainer: React.SFC = props => {
  return <System.StyledValueContainer {...props} style={style} />;
};

export const StyledValueContainer = withHOC(InnerStyledValueContainer);

StyledValueContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledValueContainer, {});
