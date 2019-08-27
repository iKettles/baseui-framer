import BaseUiPlus from "baseui/icon/plus"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"
import { IconPropertyControls } from "../utils/PropertyControls"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerPlus: React.SFC = props => {
  return <BaseUiPlus {...props} style={style} />
}

export const Plus = withHOC(InnerPlus)

Plus.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(Plus, {
  ...IconPropertyControls,
})
