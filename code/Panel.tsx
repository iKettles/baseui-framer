import * as React from "react"
import * as System from "baseui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "./generated/Panel"
import { withHOC } from "./withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerPanel: React.SFC = props => {
  return <System.Panel {...props} style={style} />
}

export const Panel = withHOC(InnerPanel)

Panel.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Panel, {
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  key: merge(controls.key, {}),
  title: merge(controls.title, {}),
  renderPanelContent: merge(controls.renderPanelContent, {}),
  expanded: merge(controls.expanded, {}),
})
