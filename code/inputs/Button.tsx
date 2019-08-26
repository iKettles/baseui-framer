import * as React from "react";
import * as System from "baseui/button";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Button";
import { withHOC } from "../withHOC";
import { ThemePropertyControl } from "../utils/PropertyControls";
import { filterProps } from "../utils/FilterProps";

const InnerButton: React.SFC<any> = props => {
  return (
    <System.Button {...filterProps(props, ["willChangeTransform"])}>
      {props.text}
    </System.Button>
  );
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 200,
  height: 50,
  disabled: false,
  isLoading: false,
  isSelected: false,
  kind: System.KIND.primary,
  overrides: {},
  shape: System.SHAPE.default,
  size: System.SIZE.default
};

export const ButtonPropertyControls: PropertyControls = {
  href: merge(controls.href, {}),
  target: merge(controls.target, {}),
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  endEnhancer: merge(controls.endEnhancer, {}),
  isLoading: merge(controls.isLoading, {}),
  isSelected: merge(controls.isSelected, {}),
  kind: merge(controls.kind, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {}),
  startEnhancer: merge(controls.startEnhancer, {}),
  type: merge(controls.type, {}),
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Button"
  },
  ...ThemePropertyControl
};

addPropertyControls(Button, ButtonPropertyControls);
