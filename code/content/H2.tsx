import * as System from "baseui/typography";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";

const InnerH2: React.SFC<any> = ({ text, ["children"]: _, ...props }) => {
  return <System.H2 {...props}>{text}</System.H2>;
};

export const H2 = withHOC(InnerH2);

H2.defaultProps = {
  width: 360,
  height: 200
};

addPropertyControls(H2, {
  text: { type: ControlType.String, defaultValue: "HEADING 2" }
});
