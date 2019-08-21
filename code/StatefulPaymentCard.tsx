import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulPaymentCard";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulPaymentCard: React.SFC = props => {
  return <System.StatefulPaymentCard {...props} style={style} />;
};

export const StatefulPaymentCard = withHOC(InnerStatefulPaymentCard);

StatefulPaymentCard.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulPaymentCard, {
  startEnhancer: merge(controls.startEnhancer, {}),
  endEnhancer: merge(controls.endEnhancer, {}),
  adjoined: merge(controls.adjoined, {}),
  autoComplete: merge(controls.autoComplete, {}),
  autoFocus: merge(controls.autoFocus, {}),
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  id: merge(controls.id, {}),
  name: merge(controls.name, {}),
  placeholder: merge(controls.placeholder, {}),
  required: merge(controls.required, {}),
  size: merge(controls.size, {}),
  type: merge(controls.type, {}),
  value: merge(controls.value, {}),
  rows: merge(controls.rows, {}),
  children: merge(controls.children, {})
});
