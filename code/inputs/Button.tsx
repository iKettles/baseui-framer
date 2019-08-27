import * as System from "baseui/button"
import { addPropertyControls, ControlType, PropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Button"
import { ThemePropertyControl } from "../utils/PropertyControls"
import { withHOC } from "../withHOC"
import { RawIcons } from "../icons/utils"

const InnerButton: React.SFC<any> = ({ containsIcon, icon, iconLocation, text, willChangeTransform: _, ...props }) => {
  const enhancerFunction =
    RawIcons[icon] && containsIcon
      ? () => {
          const Icon = RawIcons[icon]
          return <Icon />
        }
      : undefined

  const enhancer = iconLocation === "left" ? { startEnhancer: enhancerFunction } : { endEnhancer: enhancerFunction }

  return (
    <System.Button {...props} {...enhancer} $as={props.href ? "a" : "button"}>
      {text}
    </System.Button>
  )
}

export const Button = withHOC(InnerButton)

Button.defaultProps = {
  width: 87,
  height: 50,
}

export const ButtonPropertyControls: PropertyControls = {
  kind: merge(controls.kind, {}),
  disabled: merge(controls.disabled, {}),
  isLoading: merge(controls.isLoading, {}),
  isSelected: merge(controls.isSelected, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {}),
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Button",
  },
  href: merge(controls.href, {}),

  containsIcon: {
    type: ControlType.Boolean,
    title: "Icon",
    defaultValue: false,
  },
  icon: {
    type: ControlType.Enum,
    title: "Select Icon",
    options: ["none", ...Object.keys(RawIcons)],
    defaultValue: "none",
    hidden: props => !props.containsIcon,
  },
  iconLocation: {
    type: ControlType.Enum,
    title: "Icon Location",
    options: ["left", "right"],
    defaultValue: "left",
    hidden: props => !props.containsIcon,
  },
  ...ThemePropertyControl,
}

addPropertyControls(Button, ButtonPropertyControls)
