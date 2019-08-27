import * as System from "baseui/phone-input"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/PhoneInput"
import { withHOC } from "../withHOC"
import { compose } from "../utils/compose"
import { withManagedState } from "../utils/withManagedState"
import { SetGlobalStatePropertyControls } from "../utils/PropertyControls"

const InnerPhoneInput: React.SFC<any> = ({ text: value, country, ...props }) => {
  const currentValue =
    typeof value === "object"
      ? {
          phoneNumber: value.phoneNumber,
          country: value.country,
        }
      : {
          phoneNumber: value,
          country: System.COUNTRIES[country],
        }

  const onChangePhoneNumber = React.useCallback(
    e => {
      props.onChange({
        ...currentValue,
        phoneNumber: e.currentTarget.value,
      })
    },
    [currentValue]
  )
  const onChangeCountry = React.useCallback(
    e => {
      props.onChange({
        ...currentValue,
        country: e.option,
      })
    },
    [currentValue]
  )

  return (
    <System.PhoneInput
      text={currentValue.phoneNumber}
      country={currentValue.country}
      onTextChange={onChangePhoneNumber}
      onCountryChange={onChangeCountry}
    />
  )
}

export const PhoneInput = compose(
  withHOC,
  withManagedState
)(InnerPhoneInput)

PhoneInput.defaultProps = {
  width: 150,
  height: 50,
  valuePropName: "text",
}

addPropertyControls(PhoneInput, {
  text: merge(controls.text, { defaultValue: "650413182" }),
  country: {
    type: ControlType.Enum,
    title: "Country",
    defaultValue: "US",
    options: Object.keys(System.COUNTRIES),
    optionTitles: Object.keys(System.COUNTRIES).map(key => System.COUNTRIES[key].label),
  },
  ...SetGlobalStatePropertyControls,
})
