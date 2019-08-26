import BaseUiTriangleRight from "baseui/icon/triangle-right"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerTriangleRight: React.SFC = props => {
  return <BaseUiTriangleRight {...props} style={style} />
}

export const TriangleRight = withHOC(InnerTriangleRight)

TriangleRight.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(TriangleRight, {
  color: { type: ControlType.Color, defaultValue: "#121212" },
})
