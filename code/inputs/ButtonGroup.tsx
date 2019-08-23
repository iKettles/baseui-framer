import * as React from "react";
import * as System from "baseui/button-group";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/ButtonGroup";
import { withHOC } from "../withHOC";
import { Button } from "../inputs/Button";
import { ButtonPropertyControls } from "./Button";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerButtonGroup: React.SFC = props => {
  return (
    <System.ButtonGroup {...props} style={style}>
      {props.buttons && props.buttons.map((button, index) => (
        <Button key={index} kind={props.buttonKind} text={button}></Button>
      ))}
    </System.ButtonGroup>
  );
};

export const ButtonGroup = withHOC(InnerButtonGroup);

ButtonGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ButtonGroup, {
  ariaLabel: merge(controls.ariaLabel, {}),
  buttons: {
    title: 'Buttons',
    type: ControlType.Array,
    propertyControl: {
      title: 'Text',
      type: ControlType.String,
    }
  },
  buttonKind: {
    ...ButtonPropertyControls.kind,
    defaultValue: 'primary',
    title: 'Button Kind'
  },
  disabled: merge(controls.disabled, {}),
  mode: merge(controls.mode, {}),
  selected: merge(controls.selected, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {})
});
