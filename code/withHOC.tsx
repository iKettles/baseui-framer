import * as React from "react";
import { ThemeProvider } from "./utils/ThemeProvider";

export function withHOC(Component): React.SFC {
  return (props: any) => {
    return (
      <ThemeProvider theme={props.theme}>
        <Component {...props} />
      </ThemeProvider>
    )
  };
}
