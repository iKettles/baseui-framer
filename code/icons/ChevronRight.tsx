import BaseUiChevron from "baseui/icon/chevron-right"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerChevron: React.SFC = props => {
  return <BaseUiChevron {...props} style={style} />
}

export const ChevronRight = withHOC(InnerChevron)

ChevronRight.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(ChevronRight, {
  color: { type: ControlType.Color, defaultValue: "#121212" },
})
