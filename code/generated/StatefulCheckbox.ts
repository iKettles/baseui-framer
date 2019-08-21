// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  disabled: ControlDescription;
  isError: ControlDescription;
  labelPlacement: ControlDescription;
  isIndeterminate: ControlDescription;
  children: ControlDescription;
  autoFocus: ControlDescription;
  checkmarkType: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  disabled: { title: "Disabled", type: ControlType.Boolean },
  isError: { title: "IsError", type: ControlType.Boolean },
  labelPlacement: {
    title: "LabelPlacement",
    options: ["left", "right", "top", "bottom"],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    type: ControlType.Enum
  },
  isIndeterminate: { title: "IsIndeterminate", type: ControlType.Boolean },
  children: { title: "Children", type: ControlType.String },
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
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
