import BaseUiArrowLeft from "baseui/icon/arrow-left";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerArrowLeft: React.SFC = props => {
  return <BaseUiArrowLeft {...props} style={style} />;
};

export const ArrowLeft = withHOC(InnerArrowLeft);

ArrowLeft.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(ArrowLeft, {
  color: { type: ControlType.Color, defaultValue: "#121212" }
});
