import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ModalButton";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerModalButton: React.SFC = props => {
  return <System.ModalButton {...props} style={style} />;
};

export const ModalButton = withHOC(InnerModalButton);

ModalButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ModalButton, {
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
  autoFocus: merge(controls.autoFocus, {})
});
