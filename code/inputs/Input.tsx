import * as System from "baseui/input"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Input"
import { withHOC } from "../withHOC"
import { SetGlobalStatePropertyControls } from "../utils/PropertyControls"
import { withManagedState } from "../utils/withManagedState"
import compose from "../utils/compose"

const InnerInput: React.SFC<any> = ({ onChange, ...props }) => {
  const onValueChange = React.useCallback(e => onChange(e.target.value), [])
  return <System.Input onChange={onValueChange} {...props} />
}

export const Input = compose(
  withHOC,
  withManagedState
)(InnerInput)

Input.defaultProps = {
  width: 150,
  height: 50,
  valuePropName: "value",
}

addPropertyControls(Input, {
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, { defaultValue: "placeholder" }),
  value: merge(controls.value, {}),
  ...SetGlobalStatePropertyControls,
})
