import BaseUiFilter from "baseui/icon/filter"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerFilter: React.SFC = props => {
  return <BaseUiFilter {...props} style={style} />
}

export const Filter = withHOC(InnerFilter)

Filter.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(Filter, {
  color: { type: ControlType.Color, defaultValue: "#121212" },
})
