import { useState, useEffect } from "react";

function cheapHash(value: any) {
  // TODO: replace with something like https://github.com/puleos/object-hash
  return JSON.stringify(value);
}

export function useManagedState<T>(
  value: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [currentValue, setValue] = useState<T>(value);

  useEffect(() => {
    setValue(value);
  }, [cheapHash(value)]);

  return [currentValue, setValue];
}
