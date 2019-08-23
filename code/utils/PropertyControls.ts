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
    type: ControlType.String,
    defaultValue: "Default Label"
  }
}

export const TextPropertyControl: PropertyControls = {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Default Text"
  }
}

export const ColorPropertyControl: PropertyControls = {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#000000"
  }
}
