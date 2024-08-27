import { useState, useEffect } from "react";

export function useLocalStorgaeState(initialState, key) {
  const [value, setValue] = useState(function () {
    const stroedValue = localStorage.getItem(key);
    return stroedValue ? JSON.parse(stroedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
