import BaseUiArrowRight from "baseui/icon/arrow-right"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"
import { IconPropertyControls } from "../utils/PropertyControls"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerArrowRight: React.SFC = props => {
  return <BaseUiArrowRight {...props} style={style} />
}

export const ArrowRight = withHOC(InnerArrowRight)

ArrowRight.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(ArrowRight, {
  ...IconPropertyControls,
})
