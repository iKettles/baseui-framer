// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  flexGridColumnCount: ControlDescription;
  flexGridColumnGap: ControlDescription;
  flexGridRowGap: ControlDescription;
  children: ControlDescription;
  src: ControlDescription;
  alignContent: ControlDescription;
  alignItems: ControlDescription;
  alignSelf: ControlDescription;
  flexDirection: ControlDescription;
  display: ControlDescription;
  flex: ControlDescription;
  gridAutoFlow: ControlDescription;
  gridColumnGap: ControlDescription;
  gridGap: ControlDescription;
  gridRowGap: ControlDescription;
  justifyContent: ControlDescription;
  justifyItems: ControlDescription;
  justifySelf: ControlDescription;
  position: ControlDescription;
  width: ControlDescription;
  minWidth: ControlDescription;
  maxWidth: ControlDescription;
  height: ControlDescription;
  minHeight: ControlDescription;
  maxHeight: ControlDescription;
  overflow: ControlDescription;
  margin: ControlDescription;
  marginTop: ControlDescription;
  marginRight: ControlDescription;
  marginBottom: ControlDescription;
  marginLeft: ControlDescription;
  padding: ControlDescription;
  paddingTop: ControlDescription;
  paddingRight: ControlDescription;
  paddingBottom: ControlDescription;
  paddingLeft: ControlDescription;
  left: ControlDescription;
  top: ControlDescription;
  right: ControlDescription;
  bottom: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  flexGridColumnCount: {
    title: "FlexGridColumnCount",
    type: ControlType.Number
  },
  flexGridColumnGap: { title: "FlexGridColumnGap", type: ControlType.String },
  flexGridRowGap: { title: "FlexGridRowGap", type: ControlType.String },
  children: { title: "Children", type: ControlType.String },
  src: { title: "Src", type: ControlType.String },
  alignContent: {
    title: "AlignContent",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "space-between",
      "space-around",
      "space-evenly",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Space-between",
      "Space-around",
      "Space-evenly",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset"
    ],
    type: ControlType.Enum
  },
  alignItems: {
    title: "AlignItems",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "self-start",
      "self-end"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Self-start",
      "Self-end"
    ],
    type: ControlType.Enum
  },
  alignSelf: {
    title: "AlignSelf",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "self-start",
      "self-end",
      "auto"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Self-start",
      "Self-end",
      "Auto"
    ],
    type: ControlType.Enum
  },
  flexDirection: {
    title: "FlexDirection",
    options: [
      "inherit",
      "initial",
      "unset",
      "row",
      "row-reverse",
      "column",
      "column-reverse"
    ],
    optionTitles: [
      "Inherit",
      "Initial",
      "Unset",
      "Row",
      "Row-reverse",
      "Column",
      "Column-reverse"
    ],
    type: ControlType.Enum
  },
  display: {
    title: "Display",
    options: [
      "inherit",
      "initial",
      "unset",
      "block",
      "inline",
      "run-in",
      "flow",
      "flow-root",
      "table",
      "flex",
      "grid",
      "ruby",
      "block flow",
      "inline table",
      "flex run-in",
      "list-item",
      "list-item block",
      "list-item inline",
      "list-item flow",
      "list-item flow-root",
      "list-item block flow",
      "list-item block flow-root",
      "flow list-item block",
      "table-row-group",
      "table-header-group",
      "table-footer-group",
      "table-row",
      "table-cell",
      "table-column-group",
      "table-column",
      "table-caption",
      "ruby-base",
      "ruby-text",
      "ruby-base-container",
      "ruby-text-container",
      "contents",
      "none",
      "inline-block",
      "inline-table",
      "inline-flex",
      "inline-grid"
    ],
    optionTitles: [
      "Inherit",
      "Initial",
      "Unset",
      "Block",
      "Inline",
      "Run-in",
      "Flow",
      "Flow-root",
      "Table",
      "Flex",
      "Grid",
      "Ruby",
      "Block flow",
      "Inline table",
      "Flex run-in",
      "List-item",
      "List-item block",
      "List-item inline",
      "List-item flow",
      "List-item flow-root",
      "List-item block flow",
      "List-item block flow-root",
      "Flow list-item block",
      "Table-row-group",
      "Table-header-group",
      "Table-footer-group",
      "Table-row",
      "Table-cell",
      "Table-column-group",
      "Table-column",
      "Table-caption",
      "Ruby-base",
      "Ruby-text",
      "Ruby-base-container",
      "Ruby-text-container",
      "Contents",
      "None",
      "Inline-block",
      "Inline-table",
      "Inline-flex",
      "Inline-grid"
    ],
    type: ControlType.Enum
  },
  flex: { title: "Flex", type: ControlType.String },
  gridAutoFlow: {
    title: "GridAutoFlow",
    options: [
      "inherit",
      "initial",
      "unset",
      "row",
      "column",
      "dense",
      "row dense",
      "column dense"
    ],
    optionTitles: [
      "Inherit",
      "Initial",
      "Unset",
      "Row",
      "Column",
      "Dense",
      "Row dense",
      "Column dense"
    ],
    type: ControlType.Enum
  },
  gridColumnGap: { title: "GridColumnGap", type: ControlType.String },
  gridGap: { title: "GridGap", type: ControlType.String },
  gridRowGap: { title: "GridRowGap", type: ControlType.String },
  justifyContent: {
    title: "JustifyContent",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "left",
      "right"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Space-between",
      "Space-around",
      "Space-evenly",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Left",
      "Right"
    ],
    type: ControlType.Enum
  },
  justifyItems: {
    title: "JustifyItems",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "self-start",
      "self-end",
      "auto",
      "left",
      "right",
      "legacy right",
      "legacy left",
      "legacy center"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Self-start",
      "Self-end",
      "Auto",
      "Left",
      "Right",
      "Legacy right",
      "Legacy left",
      "Legacy center"
    ],
    type: ControlType.Enum
  },
  justifySelf: {
    title: "JustifySelf",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "self-start",
      "self-end",
      "auto",
      "left",
      "right"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Self-start",
      "Self-end",
      "Auto",
      "Left",
      "Right"
    ],
    type: ControlType.Enum
  },
  position: {
    title: "Position",
    options: ["static", "absolute", "relative", "fixed", "sticky"],
    optionTitles: ["Static", "Absolute", "Relative", "Fixed", "Sticky"],
    type: ControlType.Enum
  },
  width: { title: "Width", type: ControlType.String },
  minWidth: { title: "MinWidth", type: ControlType.String },
  maxWidth: { title: "MaxWidth", type: ControlType.String },
  height: { title: "Height", type: ControlType.String },
  minHeight: { title: "MinHeight", type: ControlType.String },
  maxHeight: { title: "MaxHeight", type: ControlType.String },
  overflow: {
    title: "Overflow",
    options: [
      "inherit",
      "initial",
      "unset",
      "auto",
      "visible",
      "hidden",
      "scroll",
      "scrollX",
      "scrollY"
    ],
    optionTitles: [
      "Inherit",
      "Initial",
      "Unset",
      "Auto",
      "Visible",
      "Hidden",
      "Scroll",
      "ScrollX",
      "ScrollY"
    ],
    type: ControlType.Enum
  },
  margin: { title: "Margin", type: ControlType.String },
  marginTop: { title: "MarginTop", type: ControlType.String },
  marginRight: { title: "MarginRight", type: ControlType.String },
  marginBottom: { title: "MarginBottom", type: ControlType.String },
  marginLeft: { title: "MarginLeft", type: ControlType.String },
  padding: { title: "Padding", type: ControlType.String },
  paddingTop: { title: "PaddingTop", type: ControlType.String },
  paddingRight: { title: "PaddingRight", type: ControlType.String },
  paddingBottom: { title: "PaddingBottom", type: ControlType.String },
  paddingLeft: { title: "PaddingLeft", type: ControlType.String },
  left: { title: "Left", type: ControlType.String },
  top: { title: "Top", type: ControlType.String },
  right: { title: "Right", type: ControlType.String },
  bottom: { title: "Bottom", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
