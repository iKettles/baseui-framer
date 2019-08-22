import * as React from "react";
import * as System from "baseui/spinner";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Spinner";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSpinner: React.SFC<any> = props => {
  return <System.Spinner style={style} color={props.color} />;
};

export const Spinner = withHOC(InnerSpinner);

Spinner.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(Spinner, {
  color: { type: ControlType.Color }
});
