import BaseUiTriangleUp from "baseui/icon/triangle-up"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerTriangleUp: React.SFC = props => {
  return <BaseUiTriangleUp {...props} style={style} />
}

export const TriangleUp = withHOC(InnerTriangleUp)

TriangleUp.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(TriangleUp, {
  color: { type: ControlType.Color, defaultValue: "#121212" },
})
