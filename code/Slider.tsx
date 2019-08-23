import * as React from "react";
import * as System from "baseui/slider";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Slider";
import { withHOC } from "./withHOC";
import { useManagedState } from "./utils/useManagedState";

const InnerSlider: React.SFC<any> = ({ valueFrom, valueTo, ...props }) => {
  const [currentValue, setValue] = useManagedState<number[]>([
    valueFrom,
    valueTo
  ]);

  return (
    <System.Slider
      value={currentValue}
      onChange={e => {
        setValue(e.value);
      }}
      {...props}
    />
  );
};

export const Slider = withHOC(InnerSlider);

Slider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Slider, {
  valueFrom: {
    type: ControlType.Number,
    defaultValue: 1,
    displayStepper: true
  },
  valueTo: { type: ControlType.Number, defaultValue: 2, displayStepper: true },
  min: merge(controls.min, { defaultValue: 0, displayStepper: true }),
  max: merge(controls.max, { defaultValue: 10, displayStepper: true }),
  step: merge(controls.step, { defaultValue: 1, displayStepper: true }),
  disabled: merge(controls.disabled, {})
});
