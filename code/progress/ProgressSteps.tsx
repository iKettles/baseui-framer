import * as React from "react";
import * as System from "baseui/progress-steps";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/ProgressSteps";
import { withHOC } from "../withHOC";
import { ThemePropertyControl } from "../utils/PropertyControls";
import { filterProps } from "../utils/FilterProps";

const InnerProgressSteps: React.SFC = props => {
  return (
    <System.ProgressSteps {...filterProps(props, ["current"])} current={props.current - 1}>
      {props.items.map((item, index) => (
        <System.Step
          key={index}
          title={item}
        />
      ))}
    </System.ProgressSteps>
    );
};

export const ProgressSteps = withHOC(InnerProgressSteps);

ProgressSteps.defaultProps = {
  width: 150,
  height: 105
};

addPropertyControls(ProgressSteps, {
  items: {
    title: "Items",
    type: ControlType.Array,
    defaultValue: ["Item 1", "Item 2"],
    propertyControl: {
      type: ControlType.String,
      defaultValue: "Item"
    }
  },
  current: merge(controls.current, {
    defaultValue: 1,
    min: 1,
    step: 1,
    displayStepper: true,
  }),
  ...ThemePropertyControl
});
