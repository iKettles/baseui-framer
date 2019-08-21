import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledDialCode";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledDialCode: React.SFC = props => {
  return <System.StyledDialCode {...props} style={style} />;
};

export const StyledDialCode = withHOC(InnerStyledDialCode);

StyledDialCode.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledDialCode, {});
