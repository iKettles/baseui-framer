// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  children: ControlDescription;
  checked: ControlDescription;
  disabled: ControlDescription;
  required: ControlDescription;
  isError: ControlDescription;
  autoFocus: ControlDescription;
  type: ControlDescription;
  name: ControlDescription;
  value: ControlDescription;
  isIndeterminate: ControlDescription;
  labelPlacement: ControlDescription;
  checkmarkType: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", type: ControlType.String },
  checked: { title: "Checked", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  required: { title: "Required", type: ControlType.Boolean },
  isError: { title: "IsError", type: ControlType.Boolean },
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  type: { title: "Type", type: ControlType.String },
  name: { title: "Name", type: ControlType.String },
  value: { title: "Value", type: ControlType.String },
  isIndeterminate: { title: "IsIndeterminate", type: ControlType.Boolean },
  labelPlacement: {
    title: "LabelPlacement",
    options: ["left", "right", "top", "bottom"],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    type: ControlType.Enum
  },
  checkmarkType: {
    title: "CheckmarkType",
    options: ["default", "toggle"],
    optionTitles: ["Default", "Toggle"],
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
