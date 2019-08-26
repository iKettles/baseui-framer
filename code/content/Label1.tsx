import * as React from "react"
import * as System from "baseui/typography"
import { addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { TextPropertyControl, ColorPropertyControl, UseGlobalVariablePropertyControls } from "../utils/PropertyControls"

const InnerLabel1: React.SFC<any> = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  onChangeGlobalVariable: ___,
  globalVariable,
  ...props
}) => {
  return <System.Label1 {...props}>{globalVariable || text}</System.Label1>
}

export const Label1 = withHOC(InnerLabel1)

Label1.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Label1, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
  ...UseGlobalVariablePropertyControls,
})
