import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StyledDropdownListItem";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledDropdownListItem: React.SFC = props => {
  return <System.StyledDropdownListItem {...props} style={style} />;
};

export const StyledDropdownListItem = withHOC(InnerStyledDropdownListItem);

StyledDropdownListItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledDropdownListItem, {});
