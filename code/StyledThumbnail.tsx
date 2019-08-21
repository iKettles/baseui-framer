import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledThumbnail";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledThumbnail: React.SFC = props => {
  return <System.StyledThumbnail {...props} style={style} />;
};

export const StyledThumbnail = withHOC(InnerStyledThumbnail);

StyledThumbnail.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledThumbnail, {});
