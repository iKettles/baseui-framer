// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  accordion: ControlDescription;
  children: ControlDescription;
  disabled: ControlDescription;
  renderPanelContent: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  accordion: { title: "Accordion", type: ControlType.Boolean },
  children: { title: "Children", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  renderPanelContent: { title: "RenderPanelContent", type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
