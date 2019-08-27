import BaseUiDelete from "baseui/icon/delete"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"
import { IconPropertyControls } from "../utils/PropertyControls"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerDelete: React.SFC = props => {
  return <BaseUiDelete {...props} style={style} />
}

export const Delete = withHOC(InnerDelete)

Delete.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(Delete, {
  ...IconPropertyControls,
})
