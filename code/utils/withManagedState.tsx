import * as React from "react"
import { useGlobal } from "reactn"
import { useManagedState } from "./useManagedState"

export const withManagedState = (Component): React.SFC<any> => {
  return ({ shouldUseGlobalState, globalStateKey, controlsGlobalState, valuePropName, ...props }) => {
    const isUsingGlobalState = shouldUseGlobalState === "bind-to-variable" && !!globalStateKey
    const [global, setGlobal] = useGlobal<any>(globalStateKey || null)
    const [currentValue, setValue] = useManagedState(
      isUsingGlobalState && global ? global : props[valuePropName],
      isUsingGlobalState && setGlobal
    )

    /*
      This effect ensures the global state stays in sync with whatever component controls it.
      If the component is switched from Bind To Variable -> No Binding, it will reset the global state
      If the component is switched from No Binding -> Bind To variable, it will set the global state
    */
    React.useEffect(() => {
      if (!isUsingGlobalState && controlsGlobalState) {
        // Doesn't use the global variable but does control it, reset the global state and set managed (local) state
        setValue(props[valuePropName])
        setGlobal(undefined)
      } else if (isUsingGlobalState && controlsGlobalState) {
        // Uses and controls global variable, set the global state
        setValue(props[valuePropName])
      }
    }, [isUsingGlobalState, controlsGlobalState])

    /*
      If this component controls the global variable we need to listen for changes and update the global value accordingly.
      setValue is called every time onChange is called, but as this can be changed via a propertyControl onChange events aren't always fired.
      For this reason we need to setup an effect to ensure the global state matches what's present in the property control.
    */
    if (controlsGlobalState) {
      React.useEffect(() => {
        if (currentValue !== props[valuePropName]) {
          setValue(props[valuePropName])
        }
      }, [props[valuePropName], currentValue])
    }

    const updatedProps = {
      ...props,
      [valuePropName]: currentValue,
      onChange: setValue,
    }

    return <Component {...updatedProps} />
  }
}
