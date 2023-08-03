"use client";

import localFont from "next/font/local";
import axios from "axios";
import { useState, useEffect } from "react";
import "dotenv/config";
import { InputForm } from "@/components/InputForm";
import { IngredientCard } from "@/components/IngredientCard";
import { v4 as uuidv4 } from "uuid";

const remBold = localFont({ src: "../public/fonts/REM-Bold.ttf" });

// console.log(process.env.API_KEY);

export default function Home() {
  const [todos, setTodos] = useState([]);

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
    </main>
  );
}
