import { FormControl } from "baseui/form-control"
import { PaymentCard } from "baseui/payment-card"
import { addPropertyControls } from "framer"
import * as React from "react"
import { FormValidationPropertyControls, useFormControlValidation } from "../utils/PropertyControls"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerFormControlPaymentCard = ({ value, placeholder, ...props }: any) => {
  const [currentValue, setValue] = useManagedState<string>(value)
  const [{ positive, error }, startValidation] = useFormControlValidation()
  return (
    <FormControl {...props} positive={positive} error={error}>
      <PaymentCard
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

export const FormControlPaymentCard = withHOC(InnerFormControlPaymentCard)

FormControlPaymentCard.defaultProps = {
  width: 400,
  height: 120,
}

addPropertyControls(FormControlPaymentCard, {
  ...FormValidationPropertyControls,
})
