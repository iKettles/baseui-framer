import * as React from "react"
import { useGlobal } from "reactn"
import { ThemeProvider } from "./utils/ThemeProvider"
import { addListener } from "./utils/ThemeManagement"

export function withHOC(Component): React.SFC<any> {
  return ({ useGlobalVariable, useGlobalVariableName, controlsGlobalVariable, ...props }) => {
    const shouldUseGlobalVariable = useGlobalVariable === "bind-to-variable" && !!useGlobalVariableName
    const [currentTheme, setCurrentTheme] = React.useState()
    const [global, setGlobal] = useGlobal<any>(useGlobalVariableName || null)

    React.useEffect(() => {
      const unsubscribe = addListener(theme => {
        setCurrentTheme(theme)
      })
      return unsubscribe
    }, [])

    const onChangeGlobalVariable = React.useCallback((value: any) => setGlobal(value), [])

    React.useEffect(() => {
      // Reset global variable if this component controls it
      if (!shouldUseGlobalVariable && controlsGlobalVariable) {
        setGlobal(undefined)
      } else if (shouldUseGlobalVariable && controlsGlobalVariable) {
        setGlobal(props.value)
      }
    }, [shouldUseGlobalVariable, controlsGlobalVariable])

    return (
      <ThemeProvider theme={props.theme === "inherit" ? currentTheme : props.theme}>
        <Component
          {...props}
          onChangeGlobalVariable={useGlobalVariable === "bind-to-variable" && onChangeGlobalVariable}
          globalVariable={shouldUseGlobalVariable && global}
        />
      </ThemeProvider>
    )
  }
}
