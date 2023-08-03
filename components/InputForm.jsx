import { useState } from "react";

export const InputForm = ({ addItem }) => {
  const [value, setValue] = useState("");

  const [placeholder, setPlaceholder] = useState("eggs, banana, chicken...");

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    if (placeholder === "") {
      setPlaceholder("eggs, banana, chicken...");
    }
  };

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addItem(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        type="text"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setValue(e.target.value)}
        className="w-[300px] py-3 px-2 rounded-md bg-slate-200 dark:bg-tertiary shadow-custom-btn-light dark:shadow-custom-btn-dark focus:outline-none"
        placeholder={placeholder}
      />
      <button type="submit" className="p-2 hover:opacity-50">
        Add
      </button>
    </form>
  );
};
