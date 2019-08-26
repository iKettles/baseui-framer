import * as System from "baseui/typography"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerH2: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.H2 {...props}>{text}</System.H2>
}

export const H2 = withHOC(InnerH2)

H2.defaultProps = {
  width: 360,
  height: 200,
}

addPropertyControls(H2, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
