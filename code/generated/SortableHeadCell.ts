// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  children: ControlDescription;
  direction: ControlDescription;
  disabled: ControlDescription;
  title: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", type: ControlType.String },
  direction: {
    title: "Direction",
    options: ["ASC", "DESC"],
    optionTitles: ["ASC", "DESC"],
    type: ControlType.Enum
  },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  title: { title: "Title", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
