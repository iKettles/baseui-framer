import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Upload";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerUpload: React.SFC = props => {
  return <System.Upload {...props} style={style} />;
};

export const Upload = withHOC(InnerUpload);

Upload.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Upload, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
