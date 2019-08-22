import * as React from "react";
import * as System from "baseui/input";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/BaseInput";
import { withHOC } from "./withHOC";
import { SIZE } from "baseui/button";
import { ThemePropertyControl } from "./utils/PropertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBaseInput: React.SFC = props => {
  return <System.BaseInput {...props} style={style} />;
};

export const BaseInput = withHOC(InnerBaseInput);

BaseInput.defaultProps = {
  width: 150,
  height: 50,
  adjoined: System.ADJOINED.none,
  autoComplete: 'on',
  autoFocus: false,
  disabled: false,
  error: false,
  positive: false,
  name: '',
  inputMode: 'text',
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  onClear: () => {},
  clearable: false,
  overrides: {},
  pattern: null,
  placeholder: 'Placeholder',
  required: false,
  size: SIZE.default,
  type: 'text',
  theme: 'light'
};

addPropertyControls(BaseInput, {
  adjoined: merge(controls.adjoined, {}),
  autoComplete: merge(controls.autoComplete, {}),
  autoFocus: merge(controls.autoFocus, {}),
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  id: merge(controls.id, {}),
  name: merge(controls.name, {}),
  placeholder: merge(controls.placeholder, {}),
  required: merge(controls.required, {}),
  size: merge(controls.size, {}),
  type: {
    title: "Type",
    options: ["text", "textarea", "password"],
    optionTitles: ["Text", "Textarea", "Password"],
    type: ControlType.Enum
  },
  value: merge(controls.value, {}),
  rows: merge(controls.rows, {}),
  ...ThemePropertyControl
});
