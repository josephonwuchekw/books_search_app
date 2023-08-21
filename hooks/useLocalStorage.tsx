"use client";
import { useEffect, useState } from "react";

type HookValue = string[] | Function;

function getSavedValue(key: string, initialValue: HookValue) {
  if (typeof window === "undefined") return;
  const savedValue = localStorage.getItem(key);
  if (savedValue) return JSON.parse(savedValue);

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key: string, initialValue: HookValue) {
  const [value, setValue] = useState("");
  const [array, setArray] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      let storedValues = JSON.parse(savedValue);
      if (value.trim().length > 0) {
        storedValues.push(value.trim());
      }
      if (storedValues.length > 10) {
        const sliceIndx = storedValues.length - 10;
        storedValues = storedValues.slice(sliceIndx);
      }
      localStorage.setItem(
        key,
        JSON.stringify(Array.from(new Set(storedValues)))
      );
      setArray(storedValues);
    } else {
      if (value.trim().length > 0) {
        localStorage.setItem(key, JSON.stringify([value.trim()]));
      }
    }
  }, [value]);

  return [array, setValue];
}
