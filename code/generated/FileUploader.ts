// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  disableClick: ControlDescription;
  disabled: ControlDescription;
  maxSize: ControlDescription;
  minSize: ControlDescription;
  multiple: ControlDescription;
  name: ControlDescription;
  preventDropOnDocument: ControlDescription;
  errorMessage: ControlDescription;
  progressAmount: ControlDescription;
  progressMessage: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  disableClick: { title: "DisableClick", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  maxSize: { title: "MaxSize", type: ControlType.Number },
  minSize: { title: "MinSize", type: ControlType.Number },
  multiple: { title: "Multiple", type: ControlType.Boolean },
  name: { title: "Name", type: ControlType.String },
  preventDropOnDocument: {
    title: "PreventDropOnDocument",
    type: ControlType.Boolean
  },
  errorMessage: { title: "ErrorMessage", type: ControlType.String },
  progressAmount: { title: "ProgressAmount", type: ControlType.Number },
  progressMessage: { title: "ProgressMessage", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
