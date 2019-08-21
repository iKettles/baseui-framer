// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  children: ControlDescription;
  activeKey: ControlDescription;
  disabled: ControlDescription;
  renderAll: ControlDescription;
  orientation: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", type: ControlType.String },
  activeKey: { title: "ActiveKey", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  renderAll: { title: "RenderAll", type: ControlType.Boolean },
  orientation: {
    title: "Orientation",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
