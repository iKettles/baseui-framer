import BaseUiMenu from "baseui/icon/menu";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMenu: React.SFC = props => {
  return <BaseUiMenu {...props} style={style} />;
};

export const Menu = withHOC(InnerMenu);

Menu.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(Menu, {
  color: { type: ControlType.Color, defaultValue: "#121212" }
});
