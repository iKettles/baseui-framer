import * as System from "baseui/button"
import { addPropertyControls, ControlType, PropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Button"
import { ThemePropertyControl } from "../utils/PropertyControls"
import { withHOC } from "../withHOC"

const InnerButton: React.SFC<any> = ({ text, ...props }) => {
  return (
    <System.Button {...props} $as={props.href ? "a" : "button"}>
      {text}
    </System.Button>
  )
}

export const Button = withHOC(InnerButton)

Button.defaultProps = {
  width: 200,
  height: 50,
}

export const ButtonPropertyControls: PropertyControls = {
  href: merge(controls.href, {}),
  disabled: merge(controls.disabled, {}),
  isLoading: merge(controls.isLoading, {}),
  isSelected: merge(controls.isSelected, {}),
  kind: merge(controls.kind, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {}),
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Button",
  },
  ...ThemePropertyControl,
}

addPropertyControls(Button, ButtonPropertyControls)
