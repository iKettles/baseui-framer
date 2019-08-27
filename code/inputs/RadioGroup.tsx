import * as System from "baseui/radio"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/RadioGroup"
import { withHOC } from "../withHOC"
import { useManagedState } from "../utils/useManagedState"

const InnerRadioGroup: React.SFC<any> = ({ value, items, ...props }) => {
  const [currentValue, setValue] = useManagedState(value)
  return (
    <System.RadioGroup {...props} value={currentValue} onChange={e => setValue(e.target["value"])}>
      {items.map(label => {
        return (
          <System.Radio key={label} value={label}>
            {label}
          </System.Radio>
        )
      })}
    </System.RadioGroup>
  )
}

export const RadioGroup = withHOC(InnerRadioGroup)

RadioGroup.defaultProps = {
  width: 150,
  height: 110,
}

addPropertyControls(RadioGroup, {
  items: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["First", "Second", "Third"],
  },
  value: merge(controls.value, { defaultValue: "First" }),
  disabled: merge(controls.disabled, {}),
  isError: merge(controls.isError, {}),
  labelPlacement: merge(controls.labelPlacement, { defaultValue: "right" }),
})
