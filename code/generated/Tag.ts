// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  closeable: ControlDescription;
  disabled: ControlDescription;
  isFocused: ControlDescription;
  isHovered: ControlDescription;
  kind: ControlDescription;
  variant: ControlDescription;
  children: ControlDescription;
  color: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  closeable: { title: "Closeable", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  isFocused: { title: "IsFocused", type: ControlType.Boolean },
  isHovered: { title: "IsHovered", type: ControlType.Boolean },
  kind: {
    title: "Kind",
    options: [
      "primary",
      "positive",
      "warning",
      "negative",
      "neutral",
      "custom"
    ],
    optionTitles: [
      "Primary",
      "Positive",
      "Warning",
      "Negative",
      "Neutral",
      "Custom"
    ],
    type: ControlType.Enum
  },
  variant: {
    title: "Variant",
    options: ["solid", "light", "outlined"],
    optionTitles: ["Solid", "Light", "Outlined"],
    type: ControlType.Enum
  },
  children: { title: "Children", type: ControlType.String },
  color: { title: "Color", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
