import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledEmoticon";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledEmoticon: React.SFC = props => {
  return <System.StyledEmoticon {...props} style={style} />;
};

export const StyledEmoticon = withHOC(InnerStyledEmoticon);

StyledEmoticon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledEmoticon, {});
