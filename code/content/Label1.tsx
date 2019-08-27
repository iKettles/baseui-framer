import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl, UseGlobalStatePropertyControls } from "../utils/PropertyControls"
import { withManagedState } from "../utils/withManagedState"
import { compose } from "../utils/compose"

const InnerLabel1: React.SFC<any> = ({ text, ["children"]: _, willChangeTransform: __, ...props }) => {
  return <System.Label1 {...props}>{text}</System.Label1>
}

export const Label1 = compose(
  withHOC,
  withManagedState
)(InnerLabel1)

Label1.defaultProps = {
  width: 150,
  height: 50,
  valuePropName: "text",
}

addPropertyControls(Label1, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
  ...UseGlobalStatePropertyControls,
})
