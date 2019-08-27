import { FormControl } from "baseui/form-control"
import { PhoneInput, COUNTRIES } from "baseui/phone-input"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/FormControl"
import { useFormControlValidation, FormValidationPropertyControls } from "../utils/PropertyControls"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerFormControlPhoneInput = ({ value, ...props }: any) => {
  const [currentText, setValue] = useManagedState<string>(value)
  const [{ positive, error }, startValidation] = useFormControlValidation()
  const [country, setCountry] = React.useState(COUNTRIES.US)
  return (
    <FormControl {...props} positive={positive} error={error}>
      <PhoneInput
        text={currentText}
        country={country}
        onTextChange={event => {
          setValue(event.currentTarget.value)
          startValidation(props, country.dialCode + currentText)
        }}
        onCountryChange={(event: any) => {
          setCountry(event.option)
          startValidation(props, country.dialCode + currentText)
        }}
      />
    </FormControl>
  )
}

export const FormControlPhoneInput = withHOC(InnerFormControlPhoneInput)

FormControlPhoneInput.defaultProps = {
  width: 400,
  height: 120,
}

addPropertyControls(FormControlPhoneInput, {
  ...FormValidationPropertyControls,
  mask: { type: ControlType.String, defaultValue: "(999) 999-999-9999" },
})
