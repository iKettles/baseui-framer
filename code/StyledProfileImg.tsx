import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledProfileImg";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledProfileImg: React.SFC = props => {
  return <System.StyledProfileImg {...props} style={style} />;
};

export const StyledProfileImg = withHOC(InnerStyledProfileImg);

StyledProfileImg.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledProfileImg, {});
