"use client";

import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "dotenv/config";
import { InputForm } from "@/components/InputForm";
import { IngredientCard } from "@/components/IngredientCard";
import { v4 as uuidv4 } from "uuid";

const remBold = localFont({ src: "../public/fonts/REM-Bold.ttf" });

// console.log(process.env);

export default function Home() {
  const [items, setItems] = useState([]);
  const [mealData, setMealData] = useState([]);

  const getMealData = async () => {
    const ingredientsString = items.map((item) => item.task).join(",+");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
      process.env.NEXT_PUBLIC_SECRET_KEY
    }&ingredients=${encodeURIComponent(ingredientsString)}&number=3&ranking=1`;
    const response = await fetch(url);
    const data = await response.json();
    setMealData(data);
    // console.log(data);
  };

  const addItem = (item) => {
    setItems([
      ...items,
      { id: uuidv4(), task: item, completed: false, isEditing: false },
    ]);
  };

  const deleteItems = (id) => setItems(items.filter((item) => item.id !== id));

  const clearItems = () => {
    setItems([]);
    setMealData([]);
  };

  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen items-center p-24 bg-white dark:bg-primary text-secondary dark:text-slate-200">
      <h1 className={` ${remBold.className} text-4xl mb-10`}>
        What&apos;s in your fridge today?
      </h1>
      <div className="">
        <InputForm addItem={addItem} />
      </div>
      <div className="flex flex-wrap gap-5 my-10">
        {items.map((item) => (
          <IngredientCard key={item.id} task={item} deleteItems={deleteItems} />
        ))}
      </div>
      <div className="flex gap-5">
        <button
          onClick={getMealData}
          className="shadow-custom-btn-light dark:shadow-custom-btn-dark bg-slate-200 dark:bg-tertiary rounded-md py-3 px-2 duration-75 hover:scale-105 "
        >
          Get Meal Ideas
        </button>
        <button
          onClick={clearItems}
          className="shadow-custom-btn-light dark:shadow-custom-btn-dark bg-slate-200 dark:bg-tertiary rounded-md py-3 px-2 duration-75 hover:scale-105 "
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap">
        {mealData.map((meal) => (
          <button
            key={meal.id}
            onClick={() => router.push(`/meals/${meal.id}`)}
          >
            <h1>{meal.title}</h1>
            <img src={meal.image} alt={meal.title} />
          </button>
        ))}
      </div>
    </main>
  );
}
