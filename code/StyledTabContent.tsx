import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledTabContent";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledTabContent: React.SFC = props => {
  return <System.StyledTabContent {...props} style={style} />;
};

export const StyledTabContent = withHOC(InnerStyledTabContent);

StyledTabContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledTabContent, {});
