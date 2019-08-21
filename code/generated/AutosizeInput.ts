// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  value: ControlDescription;
  defaultValue: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  value: { title: "Value", type: ControlType.String },
  defaultValue: { title: "DefaultValue", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
