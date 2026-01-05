import { useEffect, useMemo, useState } from "react";

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
      console.error(`Failed to save ${key} to local storage`, error);
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

  //next functions used only when I use cart other wise remove & change the logic
  const addToCart = (product) => {
    setValue((curr) => {
      const existingItem = curr.find((item) => item.id === product.id);
      if (existingItem) {
        return curr.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log(value);
      return [...curr, { ...product, quantity: 1 }];
    });
  };

  const decreaseByOne = (id) => {
    setValue((curr) => {
      const existingItem = curr.find((item) => item.id === id);
      if (existingItem) {
        return curr.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      console.log(value);
      return removeFromCart(id);
    });
  };
  const removeFromCart = (id) => {
    setValue((curr) => curr.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setValue((curr) =>
      curr.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  //no need to use it in 19 or more I'm just practicing
  const total = useMemo(() => {
    return Number(
      value
        .reduce((acc, curr) => {
          const totalPrice = curr.price * (curr.quantity || 0);
          return acc + totalPrice;
        }, 0)
        .toFixed(2)
    );
  }, [value]);

  return {
    value,
    addToCart,
    decreaseByOne,
    removeFromCart,
    updateQuantity,
    total,
  };
}

export default useLocalStorage;
