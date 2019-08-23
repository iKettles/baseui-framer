import * as System from "baseui/typography";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";

const InnerH3: React.SFC<any> = ({ text, ["children"]: _, ...props }) => {
  return <System.H3 {...props}>{text}</System.H3>;
};

export const H3 = withHOC(InnerH3);

H3.defaultProps = {
  width: 360,
  height: 200
};

addPropertyControls(H3, {
  color: { type: ControlType.Color, defaultValue: "#000000" },
  text: { type: ControlType.String, defaultValue: "HEADING 3" }
});
