import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Select";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSelect: React.SFC = props => {
  return <System.Select {...props} style={style} />;
};

export const Select = withHOC(InnerSelect);

Select.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Select, {
  autoFocus: merge(controls.autoFocus, {}),
  backspaceRemoves: merge(controls.backspaceRemoves, {}),
  clearable: merge(controls.clearable, {}),
  closeOnSelect: merge(controls.closeOnSelect, {}),
  creatable: merge(controls.creatable, {}),
  deleteRemoves: merge(controls.deleteRemoves, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  escapeClearsValue: merge(controls.escapeClearsValue, {}),
  filterOutSelected: merge(controls.filterOutSelected, {}),
  id: merge(controls.id, {}),
  isLoading: merge(controls.isLoading, {}),
  labelKey: merge(controls.labelKey, {}),
  startOpen: merge(controls.startOpen, {}),
  maxDropdownHeight: merge(controls.maxDropdownHeight, {}),
  multi: merge(controls.multi, {}),
  noResultsMsg: merge(controls.noResultsMsg, {}),
  onBlurResetsInput: merge(controls.onBlurResetsInput, {}),
  onCloseResetsInput: merge(controls.onCloseResetsInput, {}),
  onSelectResetsInput: merge(controls.onSelectResetsInput, {}),
  openOnClick: merge(controls.openOnClick, {}),
  placeholder: merge(controls.placeholder, {}),
  required: merge(controls.required, {}),
  searchable: merge(controls.searchable, {}),
  size: merge(controls.size, {}),
  type: merge(controls.type, {}),
  valueKey: merge(controls.valueKey, {})
});
