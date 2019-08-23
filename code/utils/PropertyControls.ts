import { ControlType, PropertyControls } from "framer";

export const ThemePropertyControl: PropertyControls = {
  theme: {
    title: "Theme",
    options: ["dark", "light", "inherit"],
    optionTitles: ["Dark", "Light", "Inherit"],
    defaultValue: "inherit",
    type: ControlType.Enum
  }
}

export const LabelPropertyControl: PropertyControls = {
  label: {
    title: "Label",
    type: ControlType.String
  }
}
