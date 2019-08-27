import * as React from "react"
import * as System from "baseui/select"
import { addPropertyControls, ControlType } from "framer"
import { controls, merge } from "../generated/Select"
import { withHOC } from "../withHOC"
import { useManagedState } from "../utils/useManagedState"

const InnerSelect: React.SFC<any> = ({ options, ...props }) => {
  const [currentValue, setValue] = useManagedState<Readonly<System.Option[]>>([])

  return (
    <System.Select
      value={currentValue}
      options={options.map(o => ({ label: o }))}
      onChange={e => setValue(e.value)}
      labelKey="label"
      valueKey="label"
      searchable={props.type === "search"}
      {...props}
    />
  )
}

export const Select = withHOC(InnerSelect)

Select.defaultProps = {
  width: 250,
  height: 50,
}

addPropertyControls(Select, {
  type: merge(controls.type, {}),
  options: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.String },
    defaultValue: ["first option", "second option", "third option"],
  },
  backspaceRemoves: merge(controls.backspaceRemoves, { defaultValue: true }),
  closeOnSelect: merge(controls.closeOnSelect, { defaultValue: true }),
  deleteRemoves: merge(controls.deleteRemoves, { defaultValue: true }),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  escapeClearsValue: merge(controls.escapeClearsValue, { defaultValue: true }),
  filterOutSelected: merge(controls.filterOutSelected, {}),
  isLoading: merge(controls.isLoading, {}),
  startOpen: merge(controls.startOpen, {}),
  maxDropdownHeight: {
    type: ControlType.Number,
    unit: "px",
    min: 0,
    max: 500,
    defaultValue: 200,
  },
  noResultsMsg: merge(controls.noResultsMsg, {
    defaultValue: "🤷‍♂️ No results found",
    hidden: props => props.type !== "search",
  }),
  openOnClick: merge(controls.openOnClick, {}),
  placeholder: merge(controls.placeholder, { defaultValue: "placeholder" }),
  size: merge(controls.size, {}),
})
