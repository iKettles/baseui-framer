import BaseUiDeleteAlt from "baseui/icon/delete-alt"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerDeleteAlt: React.SFC = props => {
  return <BaseUiDeleteAlt {...props} style={style} />
}

export const DeleteAlt = withHOC(InnerDeleteAlt)

DeleteAlt.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(DeleteAlt, {
  color: { type: ControlType.Color, defaultValue: "#121212" },
})
