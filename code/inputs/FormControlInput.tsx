import { FormControl } from "baseui/form-control"
import { Input } from "baseui/input"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/FormControl"
import { useFormControlValidation, FormValidationPropertyControls } from "../utils/PropertyControls"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerFormControlInput = ({ value, placeholder, ...props }: any) => {
  const [currentValue, setValue] = useManagedState<string>(value)
  const [{ positive, error }, startValidation] = useFormControlValidation()

  return (
    <FormControl {...props} positive={positive} error={error}>
      <Input
        value={currentValue}
        onChange={e => setValue(e.target["value"])}
        onBlur={() => startValidation(props, currentValue)}
        placeholder={placeholder}
        disabled={!!props.disabled}
        positive={!!positive}
        error={!!error}
      />
    </FormControl>
  )
}

export const FormControlInput = withHOC(InnerFormControlInput)

FormControlInput.defaultProps = {
  width: 400,
  height: 120,
}

addPropertyControls(FormControlInput, {
  ...FormValidationPropertyControls,
})
