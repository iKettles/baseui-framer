import { ControlType, PropertyControls, ControlDescription } from "framer"

export const ThemePropertyControl: PropertyControls = {
  theme: {
    title: "Theme",
    options: ["dark", "light", "inherit"],
    optionTitles: ["Dark", "Light", "Inherit"],
    defaultValue: "inherit",
    type: ControlType.Enum,
  },
}

export const LabelPropertyControl: PropertyControls = {
  label: {
    title: "Label",
    type: ControlType.String,
    defaultValue: "Default Label",
  },
}

export const TextPropertyControl: PropertyControls = {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Default Text",
  },
}

export const ColorPropertyControl: PropertyControls = {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#000000",
  },
}

export const ItemPropertyControlDescription: ControlDescription = {
  title: "Items",
  type: ControlType.Array,
  propertyControl: {
    type: ControlType.String,
  },
}

export const UseGlobalVariablePropertyControls: PropertyControls = {
  useGlobalVariable: {
    title: "Value Binding",
    type: ControlType.Enum,
    options: ["no-binding", "bind-to-variable"],
    optionTitles: ["No Binding", "Bind To Variable"],
    defaultValue: "no-binding",
  },
  useGlobalVariableName: {
    title: "Variable",
    type: ControlType.String,
    hidden: props => props.useGlobalVariable !== "bind-to-variable",
  },
}

export const SetGlobalVariablePropertyConteols: PropertyControls = {
  ...UseGlobalVariablePropertyControls,
  controlsGlobalVariable: {
    title: "Controls Variable",
    type: ControlType.Boolean,
    defaultValue: true,
    hidden: props => true,
  },
}
