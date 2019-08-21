// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  children: ControlDescription;
  disabled: ControlDescription;
  active: ControlDescription;
  key: ControlDescription;
  title: ControlDescription;
  id: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  active: { title: "Active", type: ControlType.Boolean },
  key: { title: "Key", type: ControlType.String },
  title: { title: "Title", type: ControlType.String },
  id: { title: "Id", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
