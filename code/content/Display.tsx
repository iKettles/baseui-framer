import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerDisplay: React.SFC = props => {
  return <System.Display {...props}>{props.text}</System.Display>
}

export const Display = withHOC(InnerDisplay)

Display.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Display, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
