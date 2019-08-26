import BaseUiTriangleDown from "baseui/icon/triangle-down"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerTriangleDown: React.SFC = props => {
  return <BaseUiTriangleDown {...props} style={style} />
}

export const TriangleDown = withHOC(InnerTriangleDown)

TriangleDown.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(TriangleDown, {
  color: { type: ControlType.Color, defaultValue: "#121212" },
})
