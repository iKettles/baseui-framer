// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  format: ControlDescription;
  positive: ControlDescription;
  error: ControlDescription;
  creatable: ControlDescription;
  disabled: ControlDescription;
  step: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  format: {
    title: "Format",
    options: ["12", "24"],
    optionTitles: ["12", "24"],
    type: ControlType.Enum
  },
  positive: { title: "Positive", type: ControlType.Boolean },
  error: { title: "Error", type: ControlType.Boolean },
  creatable: { title: "Creatable", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  step: { title: "Step", type: ControlType.Number }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
