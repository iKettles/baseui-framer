import * as React from "react";
import * as System from "baseui/typography";
import { addPropertyControls } from "framer";
import { withHOC } from "../withHOC";
import { filterProps } from "../utils/FilterProps";
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls";

const InnerCaption1: React.SFC = props => {
  return (
    <System.Caption1 {...filterProps(props, ['willChangeTransform'])}>
      {props.text}
    </System.Caption1>
  );
};

export const Caption1 = withHOC(InnerCaption1);

Caption1.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Caption1, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
