import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import {
  controls,
  merge
} from "./generated/StyledCountrySelectDropdownFlagColumn";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledCountrySelectDropdownFlagColumn: React.SFC = props => {
  return (
    <System.StyledCountrySelectDropdownFlagColumn {...props} style={style} />
  );
};

export const StyledCountrySelectDropdownFlagColumn = withHOC(
  InnerStyledCountrySelectDropdownFlagColumn
);

StyledCountrySelectDropdownFlagColumn.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledCountrySelectDropdownFlagColumn, {});
