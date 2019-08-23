import * as System from "baseui/typography";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";

const InnerH4: React.SFC<any> = ({ text, ["children"]: _, ...props }) => {
  return <System.H4 {...props}>{text}</System.H4>;
};

export const H4 = withHOC(InnerH4);

H4.defaultProps = {
  width: 360,
  height: 200
};

addPropertyControls(H4, {
  color: { type: ControlType.Color, defaultValue: "#000000" },
  text: { type: ControlType.String, defaultValue: "HEADING 4" }
});
