// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  autoFocus: ControlDescription;
  checked: ControlDescription;
  children: ControlDescription;
  description: ControlDescription;
  disabled: ControlDescription;
  isError: ControlDescription;
  labelPlacement: ControlDescription;
  name: ControlDescription;
  required: ControlDescription;
  value: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  checked: { title: "Checked", type: ControlType.Boolean },
  children: { title: "Children", type: ControlType.String },
  description: { title: "Description", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  isError: { title: "IsError", type: ControlType.Boolean },
  labelPlacement: {
    title: "LabelPlacement",
    options: ["left", "right", "top", "bottom"],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    type: ControlType.Enum
  },
  name: { title: "Name", type: ControlType.String },
  required: { title: "Required", type: ControlType.Boolean },
  value: { title: "Value", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
