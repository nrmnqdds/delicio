"use client";

import { useState, useEffect } from "react";

export default function Page({ params }) {
  const [mealData, setMealData] = useState([]);

  const getMealRecipe = async (id) => {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SECRET_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setMealData(data);
    // console.log(data.instructions);
  };

  useEffect(() => {
    getMealRecipe(params.meal);
  });

  return (
    <div className="flex flex-col min-h-screen items-center p-24 bg-white dark:bg-primary text-secondary dark:text-slate-200">
      <h1>Meal ID: {mealData.id}</h1>
      <h2>Meal Name: {mealData.title}</h2>
      <p>Recipe: {mealData.instructions}</p>
    </div>
  );
}
