import * as React from "react"
import * as System from "baseui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "./generated/OptionList"
import { withHOC } from "./withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerOptionList: React.SFC = props => {
  return <System.OptionList {...props} style={style} />
}

export const OptionList = withHOC(InnerOptionList)

OptionList.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(OptionList, {
  size: merge(controls.size, {}),
})
