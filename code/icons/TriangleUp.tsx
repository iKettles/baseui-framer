import BaseUiTriangleUp from "baseui/icon/triangle-up"
import { addPropertyControls } from "framer"
import * as React from "react"
import { IconPropertyControls } from "../utils/PropertyControls"
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
  ...IconPropertyControls,
})
