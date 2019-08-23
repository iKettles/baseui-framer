import * as React from "react";
import * as System from "baseui/card";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledAction";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledAction: React.SFC = props => {
  return (
    <System.StyledAction {...props} style={style}>
      {props.children}
    </System.StyledAction>
  );
};

export const StyledAction = withHOC(InnerStyledAction);

StyledAction.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledAction, {});
