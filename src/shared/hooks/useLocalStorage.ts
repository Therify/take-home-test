import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const storedItem = localStorage.getItem(key);
    if (storedItem) {
      setStoredValue(JSON.parse(storedItem));
    }
  }, [key]);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
