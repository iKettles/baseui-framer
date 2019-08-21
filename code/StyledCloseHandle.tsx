import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledCloseHandle";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledCloseHandle: React.SFC = props => {
  return <System.StyledCloseHandle {...props} style={style} />;
};

export const StyledCloseHandle = withHOC(InnerStyledCloseHandle);

StyledCloseHandle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledCloseHandle, {});
