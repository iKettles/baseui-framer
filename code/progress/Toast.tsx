import * as React from "react"
import * as System from "baseui/toast"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "../generated/Toast"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerToast: React.SFC<any> = ({ text, ...props }) => {
  return <System.Toast {...props}>{text}</System.Toast>
}

export const Toast = withHOC(InnerToast)

Toast.defaultProps = {
  width: 290,
  height: 50,
}

addPropertyControls(Toast, {
  autoHideDuration: {
    type: ControlType.Number,
    defaultValue: 0,
    min: 0,
    max: 100,
  },
  text: {
    type: ControlType.String,
    defaultValue: "Warning!, something happened",
  },
  closeable: merge(controls.closeable, { defaultValue: true }),
  kind: merge(controls.kind, { defaultValue: System.KIND.info }),
})
