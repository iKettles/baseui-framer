import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledList";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledList: React.SFC = props => {
  return <System.StyledList {...props} style={style} />;
};

export const StyledList = withHOC(InnerStyledList);

StyledList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledList, {});
