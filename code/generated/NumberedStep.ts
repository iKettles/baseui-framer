// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  title: ControlDescription;
  isCompleted: ControlDescription;
  isActive: ControlDescription;
  isLast: ControlDescription;
  children: ControlDescription;
  step: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  title: { title: "Title", type: ControlType.String },
  isCompleted: { title: "IsCompleted", type: ControlType.Boolean },
  isActive: { title: "IsActive", type: ControlType.Boolean },
  isLast: { title: "IsLast", type: ControlType.Boolean },
  children: { title: "Children", type: ControlType.String },
  step: { title: "Step", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
