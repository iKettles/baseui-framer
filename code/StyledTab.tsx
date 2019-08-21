import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledTab";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledTab: React.SFC = props => {
  return <System.StyledTab {...props} style={style} />;
};

export const StyledTab = withHOC(InnerStyledTab);

StyledTab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledTab, {});
