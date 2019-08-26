import * as React from "react"
import * as System from "baseui/accordion"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "./generated/Accordion"
import { withHOC } from "./withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerAccordion: React.SFC = props => {
  console.log(System.Accordion)
  return <System.Accordion {...props} style={style} />
}

export const Accordion = withHOC(InnerAccordion)

Accordion.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Accordion, {
  accordion: merge(controls.accordion, {}),
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  renderPanelContent: merge(controls.renderPanelContent, {}),
})
