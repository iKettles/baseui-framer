// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  autoFocusCalendar: ControlDescription;
  quickSelect: ControlDescription;
  range: ControlDescription;
  monthsShown: ControlDescription;
  orientation: ControlDescription;
  peekNextMonth: ControlDescription;
  timeSelectStart: ControlDescription;
  timeSelectEnd: ControlDescription;
  trapTabbing: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoFocusCalendar: { title: "AutoFocusCalendar", type: ControlType.Boolean },
  quickSelect: { title: "QuickSelect", type: ControlType.Boolean },
  range: { title: "Range", type: ControlType.Boolean },
  monthsShown: { title: "MonthsShown", type: ControlType.Number },
  orientation: {
    title: "Orientation",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  peekNextMonth: { title: "PeekNextMonth", type: ControlType.Boolean },
  timeSelectStart: { title: "TimeSelectStart", type: ControlType.Boolean },
  timeSelectEnd: { title: "TimeSelectEnd", type: ControlType.Boolean },
  trapTabbing: { title: "TrapTabbing", type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
