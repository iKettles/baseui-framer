import * as React from "react"
import * as System from "baseui/payment-card"
import { addPropertyControls } from "framer"
import { controls, merge } from "../generated/PaymentCard"
import { withHOC } from "../withHOC"

const InnerPaymentCard: React.SFC = props => {
  return <System.PaymentCard {...props} />
}

export const PaymentCard = withHOC(InnerPaymentCard)

PaymentCard.defaultProps = {
  width: 250,
  height: 50,
}

addPropertyControls(PaymentCard, {
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, {
    defaultValue: "0000000000000000",
  }),
  size: merge(controls.size, {}),
  value: merge(controls.value, { defaultValue: "xxxxxxxxxxxxxxxx" }),
})
