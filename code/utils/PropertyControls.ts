import { ControlType, PropertyControls } from "framer";

export const ThemePropertyControl: PropertyControls = {
  theme: {
    title: "Theme",
    options: ["dark", "light"],
    optionTitles: ["Dark", "Light"],
    type: ControlType.Enum
  }
}
