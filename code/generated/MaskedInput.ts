// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  mask: ControlDescription;
  maskChar: ControlDescription;
  startEnhancer: ControlDescription;
  endEnhancer: ControlDescription;
  adjoined: ControlDescription;
  autoComplete: ControlDescription;
  autoFocus: ControlDescription;
  clearable: ControlDescription;
  disabled: ControlDescription;
  error: ControlDescription;
  positive: ControlDescription;
  id: ControlDescription;
  name: ControlDescription;
  placeholder: ControlDescription;
  required: ControlDescription;
  size: ControlDescription;
  type: ControlDescription;
  value: ControlDescription;
  rows: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  mask: { title: "Mask", type: ControlType.String },
  maskChar: { title: "MaskChar", type: ControlType.String },
  startEnhancer: { title: "StartEnhancer", type: ControlType.String },
  endEnhancer: { title: "EndEnhancer", type: ControlType.String },
  adjoined: {
    title: "Adjoined",
    options: ["none", "left", "right", "both"],
    optionTitles: ["None", "Left", "Right", "Both"],
    type: ControlType.Enum
  },
  autoComplete: { title: "AutoComplete", type: ControlType.String },
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  clearable: { title: "Clearable", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  error: { title: "Error", type: ControlType.Boolean },
  positive: { title: "Positive", type: ControlType.Boolean },
  id: { title: "Id", type: ControlType.String },
  name: { title: "Name", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String },
  required: { title: "Required", type: ControlType.Boolean },
  size: {
    title: "Size",
    options: ["default", "compact", "large"],
    optionTitles: ["Default", "Compact", "Large"],
    type: ControlType.Enum
  },
  type: { title: "Type", type: ControlType.String },
  value: { title: "Value", type: ControlType.String },
  rows: { title: "Rows", type: ControlType.Number }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
