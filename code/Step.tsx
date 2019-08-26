import * as React from "react"
import * as System from "baseui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "./generated/Step"
import { withHOC } from "./withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerStep: React.SFC = props => {
  return <System.Step {...props} style={style} />
}

export const Step = withHOC(InnerStep)

Step.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Step, {
  title: merge(controls.title, {}),
  isCompleted: merge(controls.isCompleted, {}),
  isActive: merge(controls.isActive, {}),
  isLast: merge(controls.isLast, {}),
  children: merge(controls.children, {}),
})
