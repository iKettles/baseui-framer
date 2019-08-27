import * as React from "react"
import * as System from "baseui/payment-card"
import { addPropertyControls } from "framer"
import { controls, merge } from "../generated/PaymentCard"
import { withHOC } from "../withHOC"
import { compose } from "../utils/compose"
import { withManagedState } from "../utils/withManagedState"
import { SetGlobalStatePropertyControls } from "../utils/PropertyControls"

const InnerPaymentCard: React.SFC<any> = ({ onChange, ...props }) => {
  const onValueChange = React.useCallback(e => onChange(e.target.value), [])
  return <System.PaymentCard onChange={onValueChange} {...props} />
}

export const PaymentCard = compose(
  withHOC,
  withManagedState
)(InnerPaymentCard)

PaymentCard.defaultProps = {
  width: 250,
  height: 50,
  valuePropName: "value",
}

addPropertyControls(PaymentCard, {
  clearable: merge(controls.clearable, { defaultValue: true }),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, {
    defaultValue: "0000000000000000",
  }),
  size: merge(controls.size, {}),
  value: merge(controls.value, { defaultValue: "" }),
  ...SetGlobalStatePropertyControls,
})
