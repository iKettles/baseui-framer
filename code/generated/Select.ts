// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  autoFocus: ControlDescription;
  backspaceRemoves: ControlDescription;
  clearable: ControlDescription;
  closeOnSelect: ControlDescription;
  creatable: ControlDescription;
  deleteRemoves: ControlDescription;
  disabled: ControlDescription;
  error: ControlDescription;
  positive: ControlDescription;
  escapeClearsValue: ControlDescription;
  filterOutSelected: ControlDescription;
  id: ControlDescription;
  isLoading: ControlDescription;
  labelKey: ControlDescription;
  startOpen: ControlDescription;
  maxDropdownHeight: ControlDescription;
  multi: ControlDescription;
  noResultsMsg: ControlDescription;
  onBlurResetsInput: ControlDescription;
  onCloseResetsInput: ControlDescription;
  onSelectResetsInput: ControlDescription;
  openOnClick: ControlDescription;
  placeholder: ControlDescription;
  required: ControlDescription;
  searchable: ControlDescription;
  size: ControlDescription;
  type: ControlDescription;
  valueKey: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  backspaceRemoves: { title: "BackspaceRemoves", type: ControlType.Boolean },
  clearable: { title: "Clearable", type: ControlType.Boolean },
  closeOnSelect: { title: "CloseOnSelect", type: ControlType.Boolean },
  creatable: { title: "Creatable", type: ControlType.Boolean },
  deleteRemoves: { title: "DeleteRemoves", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  error: { title: "Error", type: ControlType.Boolean },
  positive: { title: "Positive", type: ControlType.Boolean },
  escapeClearsValue: { title: "EscapeClearsValue", type: ControlType.Boolean },
  filterOutSelected: { title: "FilterOutSelected", type: ControlType.Boolean },
  id: { title: "Id", type: ControlType.String },
  isLoading: { title: "IsLoading", type: ControlType.Boolean },
  labelKey: { title: "LabelKey", type: ControlType.String },
  startOpen: { title: "StartOpen", type: ControlType.Boolean },
  maxDropdownHeight: { title: "MaxDropdownHeight", type: ControlType.String },
  multi: { title: "Multi", type: ControlType.Boolean },
  noResultsMsg: { title: "NoResultsMsg", type: ControlType.String },
  onBlurResetsInput: { title: "OnBlurResetsInput", type: ControlType.Boolean },
  onCloseResetsInput: {
    title: "OnCloseResetsInput",
    type: ControlType.Boolean
  },
  onSelectResetsInput: {
    title: "OnSelectResetsInput",
    type: ControlType.Boolean
  },
  openOnClick: { title: "OpenOnClick", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String },
  required: { title: "Required", type: ControlType.Boolean },
  searchable: { title: "Searchable", type: ControlType.Boolean },
  size: {
    title: "Size",
    options: ["default", "compact", "large"],
    optionTitles: ["Default", "Compact", "Large"],
    type: ControlType.Enum
  },
  type: {
    title: "Type",
    options: ["select", "search"],
    optionTitles: ["Select", "Search"],
    type: ControlType.Enum
  },
  valueKey: { title: "ValueKey", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
