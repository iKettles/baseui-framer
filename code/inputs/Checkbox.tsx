import * as React from "react";
import * as System from "baseui/checkbox";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Checkbox";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState";

const InnerCheckbox: React.SFC<any> = ({ checked, label, ...props }) => {
  const [currentlyChecked, setChecked] = useManagedState(checked);
  return (
    <System.Checkbox
      checked={currentlyChecked}
      onChange={e => setChecked(e.target["value"])}
      {...props}
    >
      {label}
    </System.Checkbox>
  );
};

export const Checkbox = withHOC(InnerCheckbox);

Checkbox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Checkbox, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  required: merge(controls.required, {}),
  isError: merge(controls.isError, {}),
  type: merge(controls.type, {}),
  label: { type: ControlType.String, defaultValue: "Checked" },
  isIndeterminate: merge(controls.isIndeterminate, {}),
  labelPlacement: merge(controls.labelPlacement, {}),
  checkmarkType: merge(controls.checkmarkType, {}),
  label: {
    type: ControlType.String,
    title: "Label"
  }
});
