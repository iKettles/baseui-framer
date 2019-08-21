import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledProfileImgContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledProfileImgContainer: React.SFC = props => {
  return <System.StyledProfileImgContainer {...props} style={style} />;
};

export const StyledProfileImgContainer = withHOC(
  InnerStyledProfileImgContainer
);

StyledProfileImgContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledProfileImgContainer, {});
