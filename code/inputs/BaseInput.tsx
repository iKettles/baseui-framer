import * as System from "baseui/input"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/BaseInput"
import { ThemePropertyControl } from "../utils/PropertyControls"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerBaseInput: React.SFC<any> = ({ value, ["children"]: _, ...props }) => {
  const [currentValue, setValue] = useManagedState(value)
  return <System.BaseInput {...props} value={currentValue} onChange={e => setValue(e.target["value"])} />
}

export const BaseInput = withHOC(InnerBaseInput)

BaseInput.defaultProps = {
  width: 150,
  height: 50,
  adjoined: System.ADJOINED.none,
  autoComplete: "on",
  autoFocus: false,
  disabled: false,
  error: false,
  positive: false,
  name: "",
  inputMode: "text",
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  onClear: () => {},
  clearable: false,
  overrides: {},
  pattern: null,
  required: false,
  type: "text",
  theme: "light",
}

addPropertyControls(BaseInput, {
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, { defaultValue: "Placeholder" }),
  size: merge(controls.size, {}),
  type: {
    title: "Type",
    options: ["text", "password", "email", "number"],
    optionTitles: ["Text", "Textarea", "Password"],
    type: ControlType.Enum,
  },
  value: merge(controls.value, {}),
  rows: merge(controls.rows, { hidden: props => props.type !== "textarea", defaultValue: 2 }),
  ...ThemePropertyControl,
})
