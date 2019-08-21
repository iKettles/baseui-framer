import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledProgressSteps";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledProgressSteps: React.SFC = props => {
  return <System.StyledProgressSteps {...props} style={style} />;
};

export const StyledProgressSteps = withHOC(InnerStyledProgressSteps);

StyledProgressSteps.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledProgressSteps, {});
