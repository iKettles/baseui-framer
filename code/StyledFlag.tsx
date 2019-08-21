import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledFlag";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledFlag: React.SFC = props => {
  return <System.StyledFlag {...props} style={style} />;
};

export const StyledFlag = withHOC(InnerStyledFlag);

StyledFlag.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledFlag, {});
