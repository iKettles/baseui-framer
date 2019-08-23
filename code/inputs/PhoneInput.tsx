import * as React from "react";
import * as System from "baseui/phone-input";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/PhoneInput";
import { withHOC } from "../withHOC";

const InnerPhoneInput: React.SFC<any> = ({ text, ...props }) => {
  const [currentText, setText] = React.useState(text);
  const [country, setCountry] = React.useState(System.COUNTRIES.US);
  return (
    <System.PhoneInput
      text={currentText}
      country={country}
      onTextChange={event => {
        setText(event.currentTarget.value);
      }}
      onCountryChange={(event: any) => {
        setCountry(event.option);
      }}
    />
  );
};

export const PhoneInput = withHOC(InnerPhoneInput);

PhoneInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PhoneInput, {
  text: merge(controls.text, { defaultValue: "650413182" }),
  size: merge(controls.size, {})
});
