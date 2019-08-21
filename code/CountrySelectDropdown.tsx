import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/CountrySelectDropdown";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCountrySelectDropdown: React.SFC = props => {
  return <System.CountrySelectDropdown {...props} style={style} />;
};

export const CountrySelectDropdown = withHOC(InnerCountrySelectDropdown);

CountrySelectDropdown.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CountrySelectDropdown, {
  maxDropdownHeight: merge(controls.maxDropdownHeight, {})
});
