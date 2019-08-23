import * as React from "react";
import * as System from "baseui/typography";
import { addPropertyControls } from "framer";
import { withHOC } from "../withHOC";
import { filterProps } from "../utils/FilterProps";
import { TextPropertyControl, ColorPropertyControl } from "../utils/PropertyControls";

const InnerCaption2: React.SFC = props => {
  return (
    <System.Caption2 {...filterProps(props, ['willChangeTransform'])}>
      {props.text}
    </System.Caption2>
  );
};

export const Caption2 = withHOC(InnerCaption2);

Caption2.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Caption2, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
