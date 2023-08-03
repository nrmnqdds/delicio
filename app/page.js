"use client";

import localFont from "next/font/local";
import axios from "axios";
import { useState, useEffect } from "react";
import "dotenv/config";
import { InputForm } from "@/components/InputForm";
import { IngredientCard } from "@/components/IngredientCard";
import { v4 as uuidv4 } from "uuid";

const remBold = localFont({ src: "../public/fonts/REM-Bold.ttf" });

// console.log(process.env);

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [mealData, setMealData] = useState([]);

  const getMealData = async () => {
    const ingredientsString = todos.map((todo) => todo.task).join(",+");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
      process.env.NEXT_PUBLIC_SECRET_KEY
    }&ingredients=${encodeURIComponent(ingredientsString)}&number=3&ranking=1`;
    const response = await fetch(url);
    const data = await response.json();
    setMealData(data);
    // console.log(data);
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  return (
    <main className="flex flex-col min-h-screen items-center p-24 bg-white dark:bg-primary text-secondary dark:text-slate-200">
      <h1 className={` ${remBold.className} text-4xl mb-10`}>
        What&apos;s in your fridge today?
      </h1>
      <div>
        <InputForm addTodo={addTodo} />
        {todos.map((todo) => (
          <IngredientCard key={todo.id} task={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
      <button onClick={getMealData}>Get Meal Ideas</button>
      {mealData.map((meal) => (
        <div key={meal.id}>
          <h1>{meal.title}</h1>
          <img src={meal.image} alt={meal.title} />
        </div>
      ))}
    </main>
  );
}
