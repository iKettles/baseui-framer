import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledPlaceholder";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledPlaceholder: React.SFC = props => {
  return <System.StyledPlaceholder {...props} style={style} />;
};

export const StyledPlaceholder = withHOC(InnerStyledPlaceholder);

StyledPlaceholder.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledPlaceholder, {});
