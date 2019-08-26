import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls"

const InnerLabel2: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.Label2 {...props}>{text}</System.Label2>
}

export const Label2 = withHOC(InnerLabel2)

Label2.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Label2, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
})
