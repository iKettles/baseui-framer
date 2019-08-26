import * as System from "baseui/input";
import { addPropertyControls } from "framer";
import * as React from "react";
import { controls, merge } from "./generated/MaskedInput";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMaskedInput: React.SFC = props => {
  return <System.MaskedInput {...props} />;
};

export const MaskedInput = withHOC(InnerMaskedInput);

MaskedInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MaskedInput, {
  mask: merge(controls.mask, { defaultValue: "(999) 999-9999" }),
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, {}),
  size: merge(controls.size, {}),
  type: merge(controls.type, {}),
  value: merge(controls.value, { defaultValue: "1234567890" })
});
