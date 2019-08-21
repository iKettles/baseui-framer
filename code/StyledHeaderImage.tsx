import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledHeaderImage";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledHeaderImage: React.SFC = props => {
  return <System.StyledHeaderImage {...props} style={style} />;
};

export const StyledHeaderImage = withHOC(InnerStyledHeaderImage);

StyledHeaderImage.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledHeaderImage, {});
