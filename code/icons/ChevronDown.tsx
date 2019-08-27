import BaseUiChevron from "baseui/icon/chevron-down"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"
import { IconPropertyControls } from "../utils/PropertyControls"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerChevron: React.SFC = props => {
  return <BaseUiChevron {...props} style={style} />
}

export const ChevronDown = withHOC(InnerChevron)

ChevronDown.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(ChevronDown, {
  ...IconPropertyControls,
})
