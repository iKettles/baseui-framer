import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Card";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCard: React.SFC = props => {
  return <System.Card {...props} style={style} />;
};

export const Card = withHOC(InnerCard);

Card.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Card, {
  action: merge(controls.action, {}),
  children: merge(controls.children, {}),
  headerImage: merge(controls.headerImage, {}),
  thumbnail: merge(controls.thumbnail, {}),
  title: merge(controls.title, {})
});
