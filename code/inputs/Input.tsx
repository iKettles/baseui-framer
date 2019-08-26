import * as System from "baseui/input"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Input"
import { withHOC } from "../withHOC"
import { useManagedState } from "../utils/useManagedState"
import { ArrowLeft } from "../icons/ArrowLeft"

const InnerInput: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = useManagedState(value)
  return <System.Input value={currentValue} onChange={e => setValue(e.target["value"])} {...props} />
}

export const Input = withHOC(InnerInput)

Input.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Input, {
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, { defaultValue: "placeholder" }),
  value: merge(controls.value, {}),
})
