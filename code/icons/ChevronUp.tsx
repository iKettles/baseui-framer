import BaseUiChevron from "baseui/icon/chevron-up";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerChevron: React.SFC = props => {
  return <BaseUiChevron {...props} style={style} />;
};

export const ChevronUp = withHOC(InnerChevron);

ChevronUp.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(ChevronUp, {
  color: { type: ControlType.Color, defaultValue: "#121212" }
});
