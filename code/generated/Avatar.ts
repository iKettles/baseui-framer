// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  name: ControlDescription;
  size: ControlDescription;
  src: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  name: { title: "Name", type: ControlType.String },
  size: { title: "Size", type: ControlType.String },
  src: { title: "Src", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
