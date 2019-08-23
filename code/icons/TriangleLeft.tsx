import BaseUiTriangleLeft from "baseui/icon/triangle-left";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTriangleLeft: React.SFC = props => {
  return <BaseUiTriangleLeft {...props} style={style} />;
};

export const TriangleLeft = withHOC(InnerTriangleLeft);

TriangleLeft.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(TriangleLeft, {
  color: { type: ControlType.Color, defaultValue: "#121212" }
});
