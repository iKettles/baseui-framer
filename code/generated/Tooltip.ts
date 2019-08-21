// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  accessibilityType: ControlDescription;
  id: ControlDescription;
  ignoreBoundary: ControlDescription;
  onMouseEnterDelay: ControlDescription;
  onMouseLeaveDelay: ControlDescription;
  placement: ControlDescription;
  showArrow: ControlDescription;
  triggerType: ControlDescription;
  animateOutTime: ControlDescription;
  children: ControlDescription;
  content: ControlDescription;
  isOpen: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  accessibilityType: {
    title: "AccessibilityType",
    options: ["none", "menu", "tooltip"],
    optionTitles: ["None", "Menu", "Tooltip"],
    type: ControlType.Enum
  },
  id: { title: "Id", type: ControlType.String },
  ignoreBoundary: { title: "IgnoreBoundary", type: ControlType.Boolean },
  onMouseEnterDelay: { title: "OnMouseEnterDelay", type: ControlType.Number },
  onMouseLeaveDelay: { title: "OnMouseLeaveDelay", type: ControlType.Number },
  placement: {
    title: "Placement",
    options: [
      "auto",
      "left",
      "right",
      "top",
      "bottom",
      "topLeft",
      "topRight",
      "rightTop",
      "rightBottom",
      "bottomRight",
      "bottomLeft",
      "leftBottom",
      "leftTop"
    ],
    optionTitles: [
      "Auto",
      "Left",
      "Right",
      "Top",
      "Bottom",
      "TopLeft",
      "TopRight",
      "RightTop",
      "RightBottom",
      "BottomRight",
      "BottomLeft",
      "LeftBottom",
      "LeftTop"
    ],
    type: ControlType.Enum
  },
  showArrow: { title: "ShowArrow", type: ControlType.Boolean },
  triggerType: {
    title: "TriggerType",
    options: ["click", "hover"],
    optionTitles: ["Click", "Hover"],
    type: ControlType.Enum
  },
  animateOutTime: { title: "AnimateOutTime", type: ControlType.Number },
  children: { title: "Children", type: ControlType.String },
  content: { title: "Content", type: ControlType.String },
  isOpen: { title: "IsOpen", type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
