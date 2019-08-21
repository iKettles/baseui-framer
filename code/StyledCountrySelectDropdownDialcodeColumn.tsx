import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import {
  controls,
  merge
} from "./generated/StyledCountrySelectDropdownDialcodeColumn";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledCountrySelectDropdownDialcodeColumn: React.SFC = props => {
  return (
    <System.StyledCountrySelectDropdownDialcodeColumn
      {...props}
      style={style}
    />
  );
};

export const StyledCountrySelectDropdownDialcodeColumn = withHOC(
  InnerStyledCountrySelectDropdownDialcodeColumn
);

StyledCountrySelectDropdownDialcodeColumn.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledCountrySelectDropdownDialcodeColumn, {});
