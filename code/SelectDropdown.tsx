import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/SelectDropdown";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSelectDropdown: React.SFC = props => {
  return <System.SelectDropdown {...props} style={style} />;
};

export const SelectDropdown = withHOC(InnerSelectDropdown);

SelectDropdown.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SelectDropdown, {
  error: merge(controls.error, {}),
  isLoading: merge(controls.isLoading, {}),
  labelKey: merge(controls.labelKey, {}),
  maxDropdownHeight: merge(controls.maxDropdownHeight, {}),
  multi: merge(controls.multi, {}),
  noResultsMsg: merge(controls.noResultsMsg, {}),
  required: merge(controls.required, {}),
  searchable: merge(controls.searchable, {}),
  size: merge(controls.size, {}),
  type: merge(controls.type, {}),
  valueKey: merge(controls.valueKey, {}),
  width: merge(controls.width, {})
});
