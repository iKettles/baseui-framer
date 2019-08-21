import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import {
  controls,
  merge
} from "./generated/StyledCountrySelectDropdownContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStyledCountrySelectDropdownContainer: React.SFC = props => {
  return (
    <System.StyledCountrySelectDropdownContainer {...props} style={style} />
  );
};

export const StyledCountrySelectDropdownContainer = withHOC(
  InnerStyledCountrySelectDropdownContainer
);

StyledCountrySelectDropdownContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StyledCountrySelectDropdownContainer, {});
