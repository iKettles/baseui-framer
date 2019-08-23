import * as React from "react";
import * as System from "baseui/radio";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Radio";
import { withHOC } from "../withHOC";
import { LabelPropertyControl } from "../utils/PropertyControls";
import { useManagedState } from "../utils/useManagedState";

const InnerRadio: React.SFC<any> = ({ checked, label, ...props }) => {
  const [currentlyChecked, setChecked] = useManagedState(checked);
  return (
    <System.Radio
      checked={currentlyChecked}
      onChange={e => setChecked(e.target["value"])}
      {...props}
    >
      {label}
    </System.Radio>
  );
};

export const Radio = withHOC(InnerRadio);

Radio.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Radio, {
  autoFocus: merge(controls.autoFocus, {}),
  checked: merge(controls.checked, {}),
  children: merge(controls.children, {}),
  description: merge(controls.description, {}),
  disabled: merge(controls.disabled, {}),
  isError: merge(controls.isError, {}),
  labelPlacement: merge(controls.labelPlacement, {}),
  name: merge(controls.name, {}),
  required: merge(controls.required, {}),
  value: merge(controls.value, {}),
  ...LabelPropertyControl
});
