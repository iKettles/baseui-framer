// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  children: ControlDescription;
  value: ControlDescription;
  disabled: ControlDescription;
  required: ControlDescription;
  isError: ControlDescription;
  autoFocus: ControlDescription;
  align: ControlDescription;
  name: ControlDescription;
  labelPlacement: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", type: ControlType.String },
  value: { title: "Value", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  required: { title: "Required", type: ControlType.Boolean },
  isError: { title: "IsError", type: ControlType.Boolean },
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  align: { title: "Align", type: ControlType.String },
  name: { title: "Name", type: ControlType.String },
  labelPlacement: {
    title: "LabelPlacement",
    options: ["left", "right", "top", "bottom"],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
