import * as System from "baseui/textarea"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Textarea"
import { withHOC } from "../withHOC"
import { useManagedState } from "../utils/useManagedState"

const InnerTextarea: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = useManagedState(value)
  return <System.Textarea value={currentValue} onChange={e => setValue(e.target["value"])} {...props} />
}

export const Textarea = withHOC(InnerTextarea)

Textarea.defaultProps = {
  width: 300,
  height: 150,
}

addPropertyControls(Textarea, {
  rows: merge(controls.rows, {
    defaultValue: 5,
    min: 0,
    max: 100,
    displayStepper: true,
  }),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, { defaultValue: "Placeholder!" }),
  size: merge(controls.size, { defaultValue: "default" }),
  value: merge(controls.value, { defaultValue: "" }),
})
