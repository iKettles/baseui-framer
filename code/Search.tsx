import BaseUiSearch from "baseui/icon/search";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSearch: React.SFC = props => {
  return <BaseUiSearch {...props} style={style} />;
};

export const Search = withHOC(InnerSearch);

Search.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(Search, {
  color: { type: ControlType.Color, defaultValue: "#121212" }
});
