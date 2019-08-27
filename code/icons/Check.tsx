import BaseUiCheck from "baseui/icon/check"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"
import { IconPropertyControls } from "../utils/PropertyControls"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerCheck: React.SFC = props => {
  return <BaseUiCheck {...props} style={style} />
}

export const Check = withHOC(InnerCheck)

Check.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(Check, {
  ...IconPropertyControls,
})
