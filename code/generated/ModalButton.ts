// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  href: ControlDescription;
  target: ControlDescription;
  children: ControlDescription;
  disabled: ControlDescription;
  endEnhancer: ControlDescription;
  isLoading: ControlDescription;
  isSelected: ControlDescription;
  kind: ControlDescription;
  shape: ControlDescription;
  size: ControlDescription;
  startEnhancer: ControlDescription;
  type: ControlDescription;
  autoFocus: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  href: { title: "Href", type: ControlType.String },
  target: { title: "Target", type: ControlType.String },
  children: { title: "Children", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  endEnhancer: { title: "EndEnhancer", type: ControlType.String },
  isLoading: { title: "IsLoading", type: ControlType.Boolean },
  isSelected: { title: "IsSelected", type: ControlType.Boolean },
  kind: {
    title: "Kind",
    options: ["primary", "secondary", "tertiary", "minimal"],
    optionTitles: ["Primary", "Secondary", "Tertiary", "Minimal"],
    type: ControlType.Enum
  },
  shape: {
    title: "Shape",
    options: ["default", "round", "square"],
    optionTitles: ["Default", "Round", "Square"],
    type: ControlType.Enum
  },
  size: {
    title: "Size",
    options: ["default", "compact", "large"],
    optionTitles: ["Default", "Compact", "Large"],
    type: ControlType.Enum
  },
  startEnhancer: { title: "StartEnhancer", type: ControlType.String },
  type: {
    title: "Type",
    options: ["submit", "reset", "button"],
    optionTitles: ["Submit", "Reset", "Button"],
    type: ControlType.Enum
  },
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
