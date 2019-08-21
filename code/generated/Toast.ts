// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  autoHideDuration: ControlDescription;
  children: ControlDescription;
  closeable: ControlDescription;
  kind: ControlDescription;
  notificationType: ControlDescription;
  key: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoHideDuration: { title: "AutoHideDuration", type: ControlType.Number },
  children: { title: "Children", type: ControlType.String },
  closeable: { title: "Closeable", type: ControlType.Boolean },
  kind: {
    title: "Kind",
    options: ["info", "positive", "warning", "negative"],
    optionTitles: ["Info", "Positive", "Warning", "Negative"],
    type: ControlType.Enum
  },
  notificationType: {
    title: "NotificationType",
    options: ["inline", "toast"],
    optionTitles: ["Inline", "Toast"],
    type: ControlType.Enum
  },
  key: { title: "Key", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
