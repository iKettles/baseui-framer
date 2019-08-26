import * as System from "baseui/pin-code"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/PinCode"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerPinCode: React.SFC<any> = ({ values, ...props }) => {
  const [currentValues, setValues] = useManagedState<string[]>(values)

  return <System.PinCode values={currentValues} onChange={e => setValues(e.values)} {...props} />
}

export const PinCode = withHOC(InnerPinCode)

PinCode.defaultProps = {
  width: 150,
  height: 56,
}

addPropertyControls(PinCode, {
  positive: merge(controls.positive, {}),
  autoFocus: merge(controls.autoFocus, {}),
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  placeholder: merge(controls.placeholder, { defaultValue: "." }),
  size: merge(controls.size, {}),
})
