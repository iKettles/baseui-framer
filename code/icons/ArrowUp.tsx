import BaseUiArrowUp from "baseui/icon/arrow-up";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerArrowUp: React.SFC = props => {
  return <BaseUiArrowUp {...props} style={style} />;
};

export const ArrowUp = withHOC(InnerArrowUp);

ArrowUp.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(ArrowUp, {
  color: { type: ControlType.Color, defaultValue: "#121212" }
});
