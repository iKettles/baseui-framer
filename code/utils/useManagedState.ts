import { useState, useCallback, useEffect } from "react"

export function useManagedState<T>(
  value: T,
  onChangeGlobalVariable?: (value: any) => void
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [currentValue, setValue] = useState(value)

  // Set local state and global state (if necessary)
  const setManagedValue = useCallback(
    value => {
      setValue(value)
      if (onChangeGlobalVariable) {
        onChangeGlobalVariable(value)
      }
    },
    [onChangeGlobalVariable]
  )

  return [currentValue, setManagedValue]
}
