// useDataLoader.js
//@TODO нужн обудет реализовать загрузку данных при инициализации
import { useEffect } from "react";
import { useDescriptionStore } from "./store";

const fetchDescriptions = async () => {
  // Здесь предполагаем, что API возвращает данные в нужном формате
  const response = await fetch("/api/descriptions");
  const data = await response.json();
  return data;
};

export const useDataLoader = () => {
  const setDescriptions = useDescriptionStore((state) => state.setDescriptions);

  useEffect(() => {
    const loadData = async () => {
      const descriptions = await fetchDescriptions();
      setDescriptions(descriptions); // Загружаем данные в состояние
    };

    loadData();
  }, [setDescriptions]);
};
