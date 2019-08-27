import { ControlType, PropertyControls, ControlDescription } from "framer"
import * as React from "react"

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

export const UseGlobalStatePropertyControls: PropertyControls = {
  shouldUseGlobalState: {
    title: "Value Binding",
    type: ControlType.Enum,
    options: ["no-binding", "bind-to-variable"],
    optionTitles: ["No Binding", "Bind To Variable"],
    defaultValue: "no-binding",
  },
  globalStateKey: {
    title: "Variable",
    type: ControlType.String,
    hidden: props => props.shouldUseGlobalState !== "bind-to-variable",
  },
}

export const SetGlobalStatePropertyControls: PropertyControls = {
  ...UseGlobalStatePropertyControls,
  controlsGlobalState: {
    title: "Controls Variable",
    type: ControlType.Boolean,
    defaultValue: true,
    hidden: props => true,
  },
}

/**
 * Adds controls for form validation.
 *
 * These controls are meant to be used in conjunction with the `useFormFieldValidation` function.
 */
export const FormValidationPropertyControls: PropertyControls = {
  disabled: { type: ControlType.Boolean, defaultValue: false },
  label: { type: ControlType.String, defaultValue: "Label" },
  caption: {
    type: ControlType.String,
    defaultValue: "Captions are great for adding additional information to a form control.",
  },
  error: {
    type: ControlType.String,
    defaultValue: "This message will show if validation fails.",
  },
  positive: {
    type: ControlType.String,
    defaultValue: "This message will show if validation succeeds.",
  },
  placeholder: { type: ControlType.String, defaultValue: "placeholder" },
  value: { type: ControlType.String, defaultValue: "" },
  formValidationType: {
    title: "Validation Type",
    type: ControlType.Enum,
    options: ["number", "string", "regex", "any"],
    optionTitles: ["Number", "String", "RegExp", "No Validation"],
    defaultValue: "any",
  },

  // Regex Fields
  formValidationTypeRegex: {
    type: ControlType.String,
    title: "RegEx",
    defaultValue: ".+",
    hidden: props => props.formValidationType !== "regex",
  },

  // Number Fields
  formValidationTypeNumberMin: {
    type: ControlType.Number,
    title: "Number Min",
    hidden: props => props.formValidationType !== "number",
  },
  formValidationTypeNumberMax: {
    type: ControlType.Number,
    title: "Number Max",
    hidden: props => props.formValidationType !== "number",
  },

  // String Fields
  formValidationTypeStringMinLength: {
    type: ControlType.Number,
    title: "Min Length",
    hidden: props => props.formValidationType !== "string",
  },
  formValidationTypeStringMaxLength: {
    type: ControlType.Number,
    title: "Max Length",
    hidden: props => props.formValidationType !== "string",
  },
}

export type FormValidationProps =
  | { formValidationType: "any"; positive?: string; error?: string }
  | { formValidationType: "regex"; formValidationTypeRegex: string; positive?: string; error?: string }
  | {
      formValidationType: "number"
      formValidationTypeNumberMax: number
      formValidationTypeNumberMin: number
      positive?: string
      error?: string
    }
  | {
      formValidationType: "string"
      formValidationTypeStringMinLength: number
      formValidationTypeStringMaxLength: number
      positive?: string
      error?: string
    }

function createValidator(props: FormValidationProps) {
  return (value: any) => {
    if (props.formValidationType === "any") {
      return true
    }
    if (props.formValidationType === "regex") {
      return new RegExp(props.formValidationTypeRegex).test(value)
    }
    if (props.formValidationType === "number") {
      const number = Number(value)
      return props.formValidationTypeNumberMax >= number && number >= props.formValidationTypeNumberMin
    }
    if (props.formValidationType === "string") {
      const string = String(value || "")
      return (
        props.formValidationTypeStringMinLength >= string.length &&
        string.length <= props.formValidationTypeStringMaxLength
      )
    }
  }
}

type ValidationResult = {
  error?: string
  positive?: string
}

type StartValidationFunction<T> = (props: T, value: any) => void

export function useFormControlValidation<T extends FormValidationProps>(): [
  ValidationResult,
  StartValidationFunction<T>
] {
  const [validationResult, setValidationResult] = React.useState<ValidationResult>({})

  function startValidation(props: T, value: any) {
    console.log("start validation", value)
    const validator = createValidator(props)
    const validationResult = validator(value)
      ? {
          positive: props.positive,
        }
      : {
          error: props.error,
        }

    console.log("Result is", validationResult, props)
    setValidationResult(validationResult)
  }

  return [validationResult, startValidation]
}
