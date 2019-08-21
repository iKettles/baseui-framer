import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/CountrySelect";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCountrySelect: React.SFC = props => {
  return <System.CountrySelect {...props} style={style} />;
};

export const CountrySelect = withHOC(InnerCountrySelect);

CountrySelect.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CountrySelect, {
  size: merge(controls.size, {}),
  maxDropdownWidth: merge(controls.maxDropdownWidth, {}),
  maxDropdownHeight: merge(controls.maxDropdownHeight, {})
});
