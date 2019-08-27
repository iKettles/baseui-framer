import BaseUiTriangleRight from "baseui/icon/triangle-right"
import { addPropertyControls } from "framer"
import * as React from "react"
import { IconPropertyControls } from "../utils/PropertyControls"
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
  ...IconPropertyControls,
})
