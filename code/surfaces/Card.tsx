import * as React from "react";
import * as System from "baseui/card";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Card";
import { withHOC } from "../withHOC";
import { ThemePropertyControl } from "../utils/PropertyControls";
import { filterProps } from "../utils/FilterProps";
import { Button, ButtonPropertyControls } from "../inputs/Button";

const excludedProps = [
  "__serverResources",
  "__slotKeys",
  "willChangeTransform",
  "buttonText",
  "bodyText",
  "buttonKind"
];

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCard: React.SFC<any> = props => {
  return (
    <System.Card {...filterProps(props, excludedProps)} style={style}>
      {props.bodyText && (
        <System.StyledBody>{props.bodyText}</System.StyledBody>
      )}
      {props.buttonText && (
        <System.StyledAction>
          <Button
            theme={props.theme}
            text={props.buttonText}
            kind={props.buttonKind}
          />
        </System.StyledAction>
      )}
    </System.Card>
  );
};

export const Card = withHOC(InnerCard);

Card.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Card, {
  action: merge(controls.action, {}),
  headerImage: merge(controls.headerImage, {
    type: ControlType.Image
  }),
  thumbnail: merge(controls.thumbnail, {
    type: ControlType.Image
  }),
  title: merge(controls.title, {}),
  bodyText: {
    title: "Body Text",
    type: ControlType.String
  },
  buttonText: {
    title: "Button Text",
    type: ControlType.String
  },
  buttonKind: {
    ...ButtonPropertyControls.kind,
    title: "Button Kind"
  },
  ...ThemePropertyControl
});
