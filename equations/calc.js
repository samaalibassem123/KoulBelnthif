import { transform } from "next/dist/build/swc";

export const CalcCalories = (poids, taille, age, gender) => {
  const result =
    gender === "M"
      ? 655.1 + 9.563 * poids + 1.85 * taille + 4.676 * age
      : 66.47 + 13.75 * poids + 5.003 * taille + 6.755 * age;
  return result;
};

export const TransformKgToLb = (poids) => {
  return poids * 0.00220462;
};
