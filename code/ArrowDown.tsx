import BaseUiArrowDown from "baseui/icon/arrow-down";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerArrowDown: React.SFC = props => {
  return <BaseUiArrowDown {...props} style={style} />;
};

export const ArrowDown = withHOC(InnerArrowDown);

ArrowDown.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(ArrowDown, {
  color: { type: ControlType.Color, defaultValue: "#121212" }
});
