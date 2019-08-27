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

    /*
      This effect ensures the global state stays in sync with whatever component controls it.
      If the component is switched from Bind To Variable -> No Binding, it will reset the global state
      If the component is switched from No Binding -> Bind To variable, it will set the global state
    */
    React.useEffect(() => {
      if (!isUsingGlobalState && controlsGlobalState) {
        // Doesn't use the global variable but does control it, reset the global state and set managed (local) state
        setValue(localComponentValue)
        setGlobal(undefined)
      }
    }, [isUsingGlobalState, controlsGlobalState, global, localComponentValue])

    // If this component doesn't control the global state, we need to keep the managed state in sync with the global state
    React.useEffect(() => {
      if (isUsingGlobalState && !controlsGlobalState && global !== null && global !== undefined) {
        setValue(global)
      } else if (!isUsingGlobalState) {
        setValue(localComponentValue)
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

    console.log(updatedProps[valuePropName])

    return <Component {...updatedProps} />
  }
}
