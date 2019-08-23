import * as System from "baseui/typography";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";

const InnerH6: React.SFC<any> = ({ text, ["children"]: _, ...props }) => {
  return <System.H6 {...props}>{text}</System.H6>;
};

export const H6 = withHOC(InnerH6);

H6.defaultProps = {
  width: 360,
  height: 200
};

addPropertyControls(H6, {
  text: { type: ControlType.String, defaultValue: "HEADING 6" }
});
