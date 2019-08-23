import { useState, useEffect } from "react";
export function useManagedState<T>(value: T) {
  const [currentValue, setValue] = useState<T>(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return [currentValue, setValue];
}
