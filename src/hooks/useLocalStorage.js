import { useEffect, useState } from "react";

function getLocalStorageValue(key) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error(`Failed to load ${key} from local Storage`, error);
    return [];
  }
}

function useLocalStorage(key) {
  const [value, setValue] = useState(() => getLocalStorageValue(key));

  //Add key to local Storage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Faild to save ${key} to local storage`, error);
    }
  }, [value, key]);

  //sync key across browser tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === key) {
        try {
          const newValue = e.newValue ? JSON.parse(e.newValue) : [];
          setValue(newValue);
        } catch (error) {
          console.error(`Failed to parse ${key} from local storage`, error);
        }
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, [key]);



  return { value };
}

export default useLocalStorage;
