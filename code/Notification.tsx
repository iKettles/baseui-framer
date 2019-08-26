import * as React from "react"
import * as System from "baseui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "./generated/Notification"
import { withHOC } from "./withHOC"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerNotification: React.SFC = props => {
  return <System.Notification {...props} style={style} />
}

export const Notification = withHOC(InnerNotification)

Notification.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Notification, {
  autoHideDuration: merge(controls.autoHideDuration, {}),
  children: merge(controls.children, {}),
  closeable: merge(controls.closeable, {}),
  kind: merge(controls.kind, {}),
  notificationType: merge(controls.notificationType, {}),
  key: merge(controls.key, {}),
})
