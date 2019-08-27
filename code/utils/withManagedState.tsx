import * as React from "react"
import { useGlobal } from "reactn"
import { useManagedState } from "./useManagedState"

export const withManagedState = (Component): React.SFC<any> => {
  return ({ shouldUseGlobalState, globalStateKey, controlsGlobalState = false, valuePropName, ...props }) => {
    const localComponentValue = props[valuePropName]
    const isUsingGlobalState = shouldUseGlobalState === "bind-to-variable" && !!globalStateKey
    const [global, setGlobal] = useGlobal<any>(globalStateKey)
    const [currentValue, setValue] = useManagedState(
      isUsingGlobalState ? global : localComponentValue,
      isUsingGlobalState && controlsGlobalState && setGlobal
    )

    // If this component doesn't control the global state, we need to keep the managed state in sync with the global state
    React.useEffect(() => {
      if (isUsingGlobalState && !controlsGlobalState && global !== null && global !== undefined) {
        setValue(global)
      }
    }, [global, isUsingGlobalState, controlsGlobalState])

    /*
      If this component controls the global state we need to listen for changes and update the global state accordingly.
      setValue is called every time onChange is called, but as this can be changed via a propertyControl onChange events aren't always fired.
      For this reason we need to setup an effect to ensure the global state matches what's present in the property control.
    */
    if (controlsGlobalState) {
      React.useEffect(() => {
        setValue(localComponentValue)
      }, [localComponentValue, isUsingGlobalState])
    }

    const updatedProps = {
      ...props,
      [valuePropName]: currentValue === undefined ? localComponentValue || "" : currentValue,
      onChange: setValue,
    }

    return <Component {...updatedProps} />
  }
}
