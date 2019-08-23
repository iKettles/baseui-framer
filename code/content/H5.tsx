import * as System from "baseui/typography";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls";

const InnerH5: React.SFC<any> = ({ text, ["children"]: _, ...props }) => {
  return <System.H5 {...props}>{text}</System.H5>;
};

export const H5 = withHOC(InnerH5);

H5.defaultProps = {
  width: 360,
  height: 200
};

addPropertyControls(H5, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
